import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/success' element={<Success/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App