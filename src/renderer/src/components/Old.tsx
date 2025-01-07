import type {
  ColDef,
  SizeColumnsToFitGridStrategy,
  ValueFormatterFunc,
  ColGroupDef
} from 'ag-grid-community'
import { AllCommunityModule, ClientSideRowModelModule, ModuleRegistry } from 'ag-grid-community'

import {
  ExcelExportModule,
  MasterDetailModule,
  MultiFilterModule,
  SetFilterModule,
  FiltersToolPanelModule,
  SideBarModule,
  ColumnsToolPanelModule,
  PinnedRowModule
} from 'ag-grid-enterprise'
import { AgGridReact } from 'ag-grid-react'
import {
  type ChangeEvent,
  type FunctionComponent,
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react'

import { getProductData } from './data'
import { ActionsCellRenderer } from './cell-renderers/ActionsCellRenderer'
import { ProductCellRenderer } from './cell-renderers/ProductCellRenderer'
import { StatusCellRenderer } from './cell-renderers/StatusCellRenderer'

ModuleRegistry.registerModules([
  AllCommunityModule,
  ClientSideRowModelModule,
  ExcelExportModule,
  SetFilterModule,
  MultiFilterModule,
  MasterDetailModule,
  FiltersToolPanelModule,
  ColumnsToolPanelModule,
  PinnedRowModule,
  SideBarModule
])

interface Props {
  gridTheme?: string
  isDarkMode?: boolean
}

const paginationPageSizeSelector = [5, 10, 20]

const statuses = {
  ALL: 'All',
  PUBLISHED: 'Published',
  UNPUBLISHED: 'Unpublished',
  ARCHIVED: 'Archived'
}

const statusFormatter: ValueFormatterFunc = ({ value }) =>
  statuses[value as keyof typeof statuses] ?? ''

const getProductDataValue = (data: any, key: string) => {
  const field = data.product_data?.find((item: any) => item.key === key)
  return field?.value?.value || field?.value
}

const getProductDataColumns = (data: any[]): ColDef[] => {
  if (!data || data.length === 0) return []

  // Get all unique product data fields across all rows
  const allFields = new Map<
    string,
    {
      key: string
      name: string
      unit: string
      type: string
    }
  >()

  data.forEach((row) => {
    const productData = row.product_data || []
    productData.forEach((field) => {
      if (
        !allFields.has(field.key) &&
        !['image', 'uploads_1', 'web', 'instructions'].includes(field.key)
      ) {
        allFields.set(field.key, {
          key: field.key,
          name: field.name,
          unit: field.unit,
          type: field.type
        })
      }
    })
  })

  return Array.from(allFields.values())
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((field) => ({
      field: field.key,
      headerName: field.name,
      valueGetter: ({ data }) => getProductDataValue(data, field.key),
      valueFormatter: ({ value }) => {
        if (!value) return ''
        if (field.unit) {
          return `${value} ${field.unit}`
        }
        // Handle array values (like certifications)
        if (Array.isArray(value)) {
          if (value.length === 0) return ''
          if (typeof value[0] === 'object' && value[0].value) {
            return value.map((v) => v.value).join(', ')
          }
          return value.join(', ')
        }
        return value
      },
      // Add specific configurations based on field type
      ...getFieldTypeConfig(field.type)
    }))
}

const getFieldTypeConfig = (type: string): Partial<ColDef> => {
  const baseConfig = {
    sortable: true,
    resizable: true,
    minWidth: 120,
    autoHeight: true
  }

  switch (type) {
    case 'numeric':
      return {
        ...baseConfig,
        filter: 'agNumberColumnFilter',
        width: 150,
        cellClass: 'numeric-cell'
      }
    case 'string':
      return {
        ...baseConfig,
        filter: 'agTextColumnFilter',
        width: 180
      }
    case 'certifications':
      return {
        ...baseConfig,
        filter: 'agSetColumnFilter',
        width: 200,
        autoHeight: true,
        wrapText: true
      }
    default:
      return {
        ...baseConfig,
        width: 150
      }
  }
}

export const ProductViewer: FunctionComponent<Props> = ({
  gridTheme = 'ag-theme-quartz',
  isDarkMode
}) => {
  const gridRef = useRef<AgGridReact>(null)

  const onGridReady = useCallback(() => {
    gridRef.current!.api.sizeColumnsToFit()
    gridRef.current!.api.autoSizeAllColumns()
  }, [])

  const [colDefs] = useState<(ColDef | ColGroupDef)[]>([
    {
      field: 'actions',
      cellRenderer: ActionsCellRenderer,
      minWidth: 100,
      suppressMovable: true,
      pinned: 'right',
      editable: false
    },
    {
      headerName: 'Product Details',
      children: [
        {
          field: 'product',
          headerName: 'Product Name',
          cellRenderer: 'agGroupCellRenderer',
          headerClass: 'header-product',
          cellRendererParams: {
            innerRenderer: ProductCellRenderer
          },
          valueGetter: ({ data }) => data.product_name,
          minWidth: 300,
          editable: false
        },
        {
          field: 'status',
          valueFormatter: statusFormatter,
          cellRenderer: StatusCellRenderer,
          filter: true,
          filterParams: {
            valueFormatter: statusFormatter
          },
          headerClass: 'header-status',
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: Object.keys(statuses)
          }
        },
        {
          field: 'product_variation_name',
          headerName: 'Variant'
        },
        {
          field: 'product_group_name',
          headerName: 'Group'
        },
        {
          field: 'code',
          headerName: 'SKU',
          width: 150,
          headerClass: 'header-sku'
        }
      ]
    },
    {
      headerName: 'Product Data',
      children: getProductDataColumns(getProductData().data)
    }
  ])

  const [rowData] = useState(getProductData().data)
  const defaultColDef = useMemo<ColDef>(
    () => ({
      resizable: true,
      sortable: true,
      minWidth: 100,
      flex: 1,
      filter: true,
      floatingFilter: true,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      suppressMovable: false,
      editable: true,
      wrapText: true,
      autoHeight: true,
      valueSetter: ({ newValue, data, colDef }) => {
        if (colDef.field && data.product_data) {
          const fieldIndex = data.product_data.findIndex((item: any) => item.key === colDef.field)
          if (fieldIndex >= 0) {
            data.product_data[fieldIndex].value = { value: newValue }
            return true
          }
        }
        return false
      }
    }),
    []
  )
  const autoSizeStrategy = useMemo<SizeColumnsToFitGridStrategy>(
    () => ({
      type: 'fitGridWidth'
    }),
    []
  )
  const themeClass = isDarkMode ? `${gridTheme}-dark` : gridTheme
  const [quickFilterText, setQuickFilterText] = useState<string>()
  const onFilterTextBoxChanged = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setQuickFilterText(value),
    []
  )

  const [activeTab, setActiveTab] = useState('ALL')
  const handleTabClick = useCallback((status: string) => {
    setActiveTab(status)
    gridRef
      .current!.api.setColumnFilterModel('status', status === 'ALL' ? null : { values: [status] })
      .then(() => gridRef.current!.api.onFilterChanged())
  }, [])

  return (
    <div className="flex flex-col overflow-visible w-full h-full min-h-[calc(100vh-32px)] bg-[var(--color-bg-primary)]">
      <div className="flex justify-between py-2 mt-8 mx-8 mb-0">
        <div className="flex rounded-lg overflow-hidden p-1 bg-[var(--color-bg-secondary,#f9fafb)] border border-[var(--color-border-secondary,#eff0f1)] text-[#39485d]">
          {Object.entries(statuses).map(([key, displayValue]) => (
            <button
              className={`inline-block px-4 py-1.5 whitespace-nowrap text-sm font-medium rounded-lg border-none bg-[var(--color-bg-secondary,#f9fafb)] text-[var(--color-text-secondary,#39485d)] cursor-pointer shadow-none transition-all duration-300 hover:bg-[#7c7c7c23] hover:text-[rgba(37,37,37,0.6)] ${
                activeTab === key ? 'bg-white text-black font-medium shadow-sm' : ''
              }`}
              onClick={() => handleTabClick(key)}
              key={key}
            >
              {displayValue}
            </button>
          ))}
        </div>
        <div className="relative flex items-center overflow-visible">
          <svg
            className="absolute left-2 pointer-events-none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.5014 7.00039C11.5014 7.59133 11.385 8.1765 11.1588 8.72246C10.9327 9.26843 10.6012 9.7645 10.1833 10.1824C9.76548 10.6002 9.2694 10.9317 8.72344 11.1578C8.17747 11.384 7.59231 11.5004 7.00136 11.5004C6.41041 11.5004 5.82525 11.384 5.27929 11.1578C4.73332 10.9317 4.23725 10.6002 3.81938 10.1824C3.40152 9.7645 3.07005 9.26843 2.8439 8.72246C2.61776 8.1765 2.50136 7.59133 2.50136 7.00039C2.50136 5.80691 2.97547 4.66232 3.81938 3.81841C4.6633 2.97449 5.80789 2.50039 7.00136 2.50039C8.19484 2.50039 9.33943 2.97449 10.1833 3.81841C11.0273 4.66232 11.5014 5.80691 11.5014 7.00039ZM10.6814 11.7404C9.47574 12.6764 7.95873 13.1177 6.43916 12.9745C4.91959 12.8314 3.51171 12.1145 2.50211 10.9698C1.49252 9.8251 0.957113 8.33868 1.0049 6.81314C1.05268 5.28759 1.68006 3.83759 2.75932 2.75834C3.83857 1.67908 5.28856 1.0517 6.81411 1.00392C8.33966 0.956136 9.82608 1.49154 10.9708 2.50114C12.1154 3.51073 12.8323 4.91862 12.9755 6.43819C13.1187 7.95775 12.6773 9.47476 11.7414 10.6804L14.5314 13.4704C14.605 13.539 14.6642 13.6218 14.7051 13.7138C14.7461 13.8058 14.7682 13.9052 14.77 14.0059C14.7717 14.1066 14.7532 14.2066 14.7155 14.3C14.6778 14.3934 14.6216 14.4782 14.5504 14.5494C14.4792 14.6206 14.3943 14.6768 14.301 14.7145C14.2076 14.7522 14.1075 14.7708 14.0068 14.769C13.9061 14.7672 13.8068 14.7452 13.7148 14.7042C13.6228 14.6632 13.54 14.6041 13.4714 14.5304L10.6814 11.7404Z"
              fill="currentColor"
            />
          </svg>

          <input
            type="text"
            id="filter-text-box"
            placeholder="Search product..."
            onInput={onFilterTextBoxChanged}
            className="text-sm py-1.5 px-3 pl-9 leading-[1.4] rounded-md border border-[var(--color-input-border,#d0d5dd)] bg-transparent outline-none"
          />
        </div>
      </div>
      <div
        className={`${themeClass} h-[calc(100vh-32px-62px-32px)] mx-8 mb-8`}
        style={{ '--ag-header-background-color': 'transparent !important' } as React.CSSProperties}
      >
        <AgGridReact
          theme="legacy"
          ref={gridRef}
          columnDefs={colDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          domLayout="autoHeight"
          alwaysShowVerticalScroll={true}
          // getRowHeight={() => undefined}
          autoSizeStrategy={autoSizeStrategy}
          onGridReady={onGridReady}
          onGridSizeChanged={onGridReady}
          pagination
          paginationPageSize={10}
          paginationPageSizeSelector={paginationPageSizeSelector}
          // masterDetail
          // detailCellRendererParams={detailCellRendererParams}
          // detailRowAutoHeight
          quickFilterText={quickFilterText}
          sideBar={{
            toolPanels: [
              {
                id: 'columns',
                labelDefault: 'Columns',
                labelKey: 'columns',
                iconKey: 'columns',
                toolPanel: 'agColumnsToolPanel'
              },
              {
                id: 'filters',
                labelDefault: 'Filters',
                labelKey: 'filters',
                iconKey: 'filter',
                toolPanel: 'agFiltersToolPanel'
              }
              // {
              //   id: 'searchToolPanel',
              //   labelDefault: 'Search',
              //   labelKey: 'searchToolPanel',
              //   iconKey: 'search',
              //   toolPanel: SearchToolPanel
              // }
            ],
            // defaultToolPanel: 'columns',
            position: 'right'
          }}
        />
      </div>
    </div>
  )
}
