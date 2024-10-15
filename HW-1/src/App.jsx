import './App.css'
import { Row } from './row/Row.jsx'

function App() {

  const rowData = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <Row data={rowData} />
      <Row data={['More', 'Data', 'Here']} />
      <Row data={['More']} />
    </div>
  )
}

export default App
