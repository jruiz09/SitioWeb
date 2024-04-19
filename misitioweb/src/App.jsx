import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/Contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
