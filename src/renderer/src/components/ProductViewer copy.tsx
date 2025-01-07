import { type FunctionComponent, useCallback, useMemo, useRef, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { type SizeColumnsToFitGridStrategy, ColDef, ColGroupDef } from 'ag-grid-community'
import { getProductData } from './data'
import {
  registerAgGridModules,
  defaultColDef,
  sideBarConfig,
  registerAgGridModulesServerSide
} from '../config/agGridConfig'
import { getBaseColumnDefs, getProductDataColumns } from '../services/productDataService'
import { ProductFilterControls } from './ProductFilterControls'

// Register AG-Grid modules
// registerAgGridModules()
registerAgGridModulesServerSide()
interface Props {
  gridTheme?: string
  isDarkMode?: boolean
}

const paginationPageSizeSelector = [5, 10, 20]

export const ProductViewer: FunctionComponent<Props> = ({
  gridTheme = 'ag-theme-quartz',
  isDarkMode
}) => {
  const gridRef = useRef<AgGridReact>(null)
  const [activeTab, setActiveTab] = useState('ALL')
  const [quickFilterText, setQuickFilterText] = useState<string>()

  const onGridReady = useCallback(() => {
    gridRef.current!.api.sizeColumnsToFit()
    gridRef.current!.api.autoSizeAllColumns()
    console.log('onGridReady')
  }, [])

  const handleTabClick = useCallback((status: string) => {
    setActiveTab(status)
    gridRef
      .current!.api.setColumnFilterModel('status', status === 'ALL' ? null : { values: [status] })
      .then(() => gridRef.current!.api.onFilterChanged())
  }, [])

  const [rowData] = useState(getProductData().data)

  const columnDefs = useMemo<(ColDef | ColGroupDef)[]>(() => {
    const baseColumns = getBaseColumnDefs()
    const productDataColumns = getProductDataColumns(rowData)
    return [
      ...baseColumns,
      {
        headerName: 'Product Data',
        children: productDataColumns
      }
    ]
  }, [rowData])

  const autoSizeStrategy = useMemo<SizeColumnsToFitGridStrategy>(
    () => ({
      type: 'fitGridWidth'
    }),
    []
  )

  const themeClass = isDarkMode ? `${gridTheme}-dark` : gridTheme

  return (
    <div className="flex flex-col w-full h-full min-h-[calc(100vh - var(--layout-grid-header-height))] bg-[var(--color-bg-primary)] relative">
      <div className="sticky top-0 z-10 bg-white shadow-[0_4px_8px_-2px_rgba(16,24,40,0.1)]">
        <ProductFilterControls
          activeTab={activeTab}
          onTabClick={handleTabClick}
          onFilterTextChange={({ target: { value } }) => setQuickFilterText(value)}
        />
      </div>
      <section className="flex-auto overflow-hidden flex">
        <div className={`flex-auto overflow-hidden ${themeClass}`}>
          <AgGridReact
            theme="legacy"
            ref={gridRef}
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={defaultColDef}
            // domLayout="autoHeight"
            autoSizeStrategy={autoSizeStrategy}
            onGridReady={onGridReady}
            onGridSizeChanged={onGridReady}
            pagination
            paginationPageSize={10}
            paginationPageSizeSelector={paginationPageSizeSelector}
            quickFilterText={quickFilterText}
            sideBar={sideBarConfig}
          />
        </div>
      </section>
    </div>
  )
}
