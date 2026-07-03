import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Productos from './pages/Productos.jsx'
import Servicios from './pages/Servicios.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'
import Contenedor from './components/Contenedor.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contenedor>
      <BrowserRouter>

        <Navbar />
        
        <Routes> {/* switch */}
          <Route path='/' element={<App />} /> {/* case */}
          <Route path='/productos' element={<Productos />} /> {/* case */}
          <Route path='/servicios' element={<Servicios />} /> {/* case */}
          <Route path='/nosotros' element={<Nosotros />} /> {/* case */}
          <Route path='/contacto' element={<Contacto />} /> {/* case */}
          <Route path='*' element={<NoEncontrado />} /> {/* default */}
        </Routes>

        <Footer />

      </BrowserRouter>
    </Contenedor>
  </StrictMode>,
)
