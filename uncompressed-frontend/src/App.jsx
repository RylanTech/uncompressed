import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Homepage from './pages/Homepage'
import CollectionPage from './Pages/CollectionPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='/collection/:id' element={<CollectionPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
