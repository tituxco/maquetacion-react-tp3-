import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import AcercaDe from './components/AcercaDe.jsx'
import Categorias from './components/Categorias.jsx'
function App() {  
  return (
    <>    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='categorias' element={<Categorias/>}></Route>
      <Route path='acercade' element={<AcercaDe/>}></Route>    
    </Routes>
    </>
  )
}

export default App
