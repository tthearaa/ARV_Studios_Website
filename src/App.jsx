import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CatalogPage from './Pages/Catalog';
import ContactPage from './Pages/Contact';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CatalogPage/>}/>
        <Route path='/ContactPage' element={<ContactPage/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>

    
    </BrowserRouter>

  )
}
export default App;