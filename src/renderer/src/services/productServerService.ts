import { IServerSideGetRowsRequest } from 'ag-grid-community'
import { getProductData } from '../components/data'
import { SetFilterValuesFuncParams } from 'ag-grid-enterprise'

export interface IProductServerSideResponse {
  success: boolean
  rows: any[]
  lastRow: number | null
}

export class ProductServer {
  private allData: any[]

  constructor() {
    this.allData = getProductData().data
  }

  getGroups(groupFilterModel: any) {
    console.log('getGroups', groupFilterModel)
    return this.allData
      .map((item) => item.product_group_name)
      .filter((group, index, self) => self.indexOf(group) === index)
  }

  getData(request: IServerSideGetRowsRequest): IProductServerSideResponse {
    const startRow = request.startRow || 0
    const endRow = request.endRow || this.allData.length

    // Apply sorting if present
    let sortedData = [...this.allData]
    if (request.sortModel && request.sortModel.length > 0) {
      const { colId, sort } = request.sortModel[0]
      sortedData.sort((a, b) => {
        const valueA = a[colId]
        const valueB = b[colId]
        return sort === 'asc' ? (valueA > valueB ? 1 : -1) : valueA < valueB ? 1 : -1
      })
    }

    // Apply filtering if present
    let filteredData = sortedData
    if (request.filterModel && Object.keys(request.filterModel).length > 0) {
      Object.keys(request.filterModel).forEach((key) => {
        const filter = request.filterModel![key]
        if (filter.type === 'contains') {
          filteredData = filteredData.filter((item) =>
            String(item[key]).toLowerCase().includes(filter.filter.toLowerCase())
          )
        }
      })
    }

    // Get the requested page of data
    const rowsForPage = filteredData.slice(startRow, endRow)

    return {
      success: true,
      rows: rowsForPage,
      lastRow: filteredData.length
    }
  }
}
export function getGroupValuesAsync(params: SetFilterValuesFuncParams) {
  const groupFilterModel = params.api.getFilterModel()['group']
  const productServer = new ProductServer()
  const groups = productServer.getGroups(groupFilterModel)

  // simulating real server call with a 500ms delay
  setTimeout(() => {
    params.success(groups)
  }, 500)
}

export const getServerSideDatasource = (server: ProductServer) => {
  return {
    getRows: (params: any) => {
      console.log('[Datasource] - rows requested by grid: ', params.request)
      const response = server.getData(params.request)

      setTimeout(() => {
        if (response.success) {
          params.success({
            rowData: response.rows,
            rowCount: response.lastRow
          })
        } else {
          params.fail()
        }
      }, 100) // Simulate network delay
    }
  }
}
