import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Productos from './pages/productos'
import Promociones from './pages/promociones'
import Contacto from './pages/contacto'
import Clientes from './pages/clientes';
import NavBar from './components/navbar/Navbar'
import Footer from './components/footer/footer'

const Ruter = () => {
  return (
    <>
          <Router>
              <NavBar/>   
                <Routes>
                  <Route exact path='/home' element={<Home/>}/>
                  <Route exact path='/contacto' element={<Contacto/>}/>
                  <Route exact path='/productos' element={<Productos/>}/>
                  <Route exact path='/promociones' element={<Promociones/>}/>
                  <Route exact path='/clientes' element={<Clientes/>}/>
                  <Route exact path='/' element={<Home/>}/>
                </Routes>
              <Footer/>
          </Router>
    </>
  )
}

export default Ruter