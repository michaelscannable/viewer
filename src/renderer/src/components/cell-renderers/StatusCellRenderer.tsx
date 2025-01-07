import type { CustomCellRendererProps } from 'ag-grid-react'
import { type FunctionComponent } from 'react'
import { Check, X, Archive } from 'lucide-react'

export const StatusCellRenderer: FunctionComponent<CustomCellRendererProps> = ({ value }) => {
  const getIcon = () => {
    switch (value) {
      case 'PUBLISHED':
        return <Check className="text-green-600" size={16} />
      case 'UNPUBLISHED':
        return <X className="text-red-600" size={16} />
      case 'ARCHIVED':
        return <Archive className="text-gray-600" size={16} />
      default:
        return null
    }
  }

  return <div className="flex items-center justify-center h-full p-2">{getIcon()}</div>
}
