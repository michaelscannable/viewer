import { ProductViewer } from './components/ProductViewer'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
function App(): JSX.Element {
  return (
    <div className="min-h-screen">
      <ProductViewer />
    </div>
  )
}

export default App