import type { CustomCellRendererProps } from 'ag-grid-react'
import { type FunctionComponent, useCallback } from 'react'
import { Trash2 } from 'lucide-react'

export const ActionsCellRenderer: FunctionComponent<CustomCellRendererProps> = ({ api, node }) => {
  const onRemoveClick = useCallback(() => {
    const rowData = node.data
    api.applyTransaction({ remove: [rowData] })
  }, [node, api])

  return (
    <div className="flex gap-2 flex-row-reverse items-center h-full">
      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[--ag-border-color] bg-[--ag-background-color] text-[--color-fg-primary] shadow-sm hover:bg-gray-50"
        onClick={onRemoveClick}
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  )
}
