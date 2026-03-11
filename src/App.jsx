import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CatalogPage from './Pages/Catalog';
import ContactPage from './Pages/Contact';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CatalogPage/>}/>
        <Route path='/ContactPage' element={<ContactPage/>}/>
      </Routes>

    
    </BrowserRouter>

  )
}
export default App;