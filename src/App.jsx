import './index.css'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage';
import ProductPage from './Pages/ProductPage';
import ContactPage from './Pages/ContactPage';

import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="home" element={<HomePage/>}/>
            <Route path="sobremi" element={<AboutPage/>}/>
            <Route path="productos" element={<ProductPage/>}/>
            <Route path="contacto" element={<ContactPage/>}/>
            <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
      
    </>
  );
}

export default App;

