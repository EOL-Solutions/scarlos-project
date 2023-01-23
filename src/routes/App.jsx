import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexTemplate from '../containers/IndexTemplate'
import Home from '../pages/Home'
import About from '../pages/About'
import { Events } from '../pages/Events'
import Gallery from '../pages/Gallery'
import Seo from '../components/Seo'

function App () {
  return (<>
    <Seo />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexTemplate />} >
          <Route index element={<Home/>} />
          <Route path='about' element={<About />} />
          <Route path='events' element={<Events />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='*' element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>

  )
}

export default App
