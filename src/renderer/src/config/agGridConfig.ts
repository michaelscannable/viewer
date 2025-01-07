import {
  AllCommunityModule,
  ClientSideRowModelModule,
  ModuleRegistry,
  ColDef,
  SideBarDef
} from 'ag-grid-community'
import {
  ExcelExportModule,
  MasterDetailModule,
  MultiFilterModule,
  SetFilterModule,
  FiltersToolPanelModule,
  SideBarModule,
  ColumnsToolPanelModule,
  PinnedRowModule,
  ServerSideRowModelModule
} from 'ag-grid-enterprise'

export const registerAgGridModules = (): void => {
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
}

export const registerAgGridModulesServerSide = (): void => {
  ModuleRegistry.registerModules([
    AllCommunityModule,
    ServerSideRowModelModule,
    ExcelExportModule,
    SetFilterModule,
    MultiFilterModule,
    MasterDetailModule,
    FiltersToolPanelModule,
    ColumnsToolPanelModule,
    PinnedRowModule,
    SideBarModule
  ])
}

export const defaultColDef: ColDef = {
  resizable: true,
  sortable: true,
  minWidth: 150,
  flex: 1,
  filter: true,
  floatingFilter: true,
  wrapHeaderText: true,
  autoHeaderHeight: true,
  suppressMovable: false,
  editable: true,
  wrapText: true,
  autoHeight: true
}

export const sideBarConfig: SideBarDef = {
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
  ],
  position: 'right' as const
}
