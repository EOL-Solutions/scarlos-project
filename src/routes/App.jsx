import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexTemplate from '../containers/IndexTemplate'
import Home from '../pages/Home'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexTemplate />} >
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
