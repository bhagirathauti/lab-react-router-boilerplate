import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Pages/home'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contacts/>}/>
    </Routes>
  )
}

export default App
