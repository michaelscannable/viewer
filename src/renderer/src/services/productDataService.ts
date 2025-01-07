import { ColDef, ValueFormatterFunc, ColGroupDef } from 'ag-grid-community'
import { ActionsCellRenderer } from '../components/cell-renderers/ActionsCellRenderer'
import { ProductCellRenderer } from '../components/cell-renderers/ProductCellRenderer'
import { StatusCellRenderer } from '../components/cell-renderers/StatusCellRenderer'
import { getGroupValuesAsync } from './productServerService'

export const statuses = {
  ALL: 'All',
  PUBLISHED: 'Published',
  UNPUBLISHED: 'Unpublished',
  ARCHIVED: 'Archived'
} as const

export const statusFormatter: ValueFormatterFunc = ({ value }) =>
  statuses[value as keyof typeof statuses] ?? ''

const getProductDataValue = (data: any, key: string) => {
  const field = data.product_data?.find((item: any) => item.key === key)
  return field?.value?.value || field?.value
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

export const getProductDataColumns = (data: any[]): ColDef[] => {
  if (!data || data.length === 0) return []

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
        if (Array.isArray(value)) {
          if (value.length === 0) return ''
          if (typeof value[0] === 'object' && value[0].value) {
            return value.map((v) => v.value).join(', ')
          }
          return value.join(', ')
        }
        return value
      },
      ...getFieldTypeConfig(field.type)
    }))
}

export const getBaseColumnDefs = (): (ColDef | ColGroupDef)[] => [
  {
    headerName: 'Product Details',
    children: [
      {
        field: 'status',
        valueFormatter: statusFormatter,
        cellRenderer: StatusCellRenderer,
        filter: true,
        filterParams: {
          values: Object.keys(statuses),
          valueFormatter: statusFormatter
        },
        headerClass: 'header-status',
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: Object.keys(statuses)
        }
      },
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
        field: 'product_variation_name',
        headerName: 'Variant'
      },
      {
        field: 'product_group_name',
        headerName: 'Group',
        filter: true,
        filterParams: {
          values: getGroupValuesAsync
        }
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
    field: 'actions',
    // headerName: '',
    cellRenderer: ActionsCellRenderer,
    minWidth: 90,
    filter: false,
    suppressMovable: true,
    pinned: 'right',
    editable: false
  }
]
