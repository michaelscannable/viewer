import type { CustomCellRendererProps } from 'ag-grid-react'
import { type FunctionComponent, useState } from 'react'

import styles from './ProductCellRenderer.module.css'

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' fill='%23999' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E"

export const ProductCellRenderer: FunctionComponent<CustomCellRendererProps> = ({
  value,
  data: { image, category }
}) => {
  const [imgSrc, setImgSrc] = useState(`../../assets/${image}.png`)

  const handleImageError = () => {
    setImgSrc(PLACEHOLDER_IMAGE)
  }

  return (
    <div className={styles.productCell}>
      <div className={styles.image}>
        <img src={imgSrc} alt={value} onError={handleImageError} />
      </div>
      <div>
        <div>{value}</div>
        <div className={styles.stockCell}>{category}</div>
      </div>
    </div>
  )
}
