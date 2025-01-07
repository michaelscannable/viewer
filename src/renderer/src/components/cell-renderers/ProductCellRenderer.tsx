import type { CustomCellRendererProps } from 'ag-grid-react'
import { type FunctionComponent, useState } from 'react'

export const ProductCellRenderer: FunctionComponent<CustomCellRendererProps> = ({
  value,
  data: { image, product_group_name }
}) => {
  const [imgSrc, setImgSrc] = useState(`../../assets/${image}.png`)

  const handleImageError = () => {
    // random image between 1 and 10
    const randomImage = Math.floor(Math.random() * 20) + 1
    setImgSrc(`https://prd.place/400/?id=${randomImage}`)
  }

  return (
    <div className="h-full flex flex-row items-center justify-center">
      <div className="max-w-full max-h-[100px] bg-[rgba(201,201,201,0.2)] rounded-lg m-2">
        <img
          src={imgSrc}
          alt={value}
          onError={handleImageError}
          className="w-[60px] h-[60px] rounded-lg"
        />
      </div>
      <div>
        <div className="font-medium leading-normal">{value}</div>
        <div className="mt-1 text-xs bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] w-fit border border-[#c0c0c057] rounded-md py-0.5 px-1">
          {product_group_name}
        </div>
      </div>
    </div>
  )
}
