import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Add from './pages/Add'
import View from './pages/View'
import Edit from './pages/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Add/>}/>
              <Route path='/view' element={<View/>}/>
              <Route path='/edit' element={<Edit/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
