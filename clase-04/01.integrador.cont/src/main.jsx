import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Contenedor from './components/Contenedor.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Rutas from './routes/Rutas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Navbar />

      <Contenedor>
          <Rutas />
      </Contenedor>

      <Footer />

    </BrowserRouter>
  </StrictMode>,
)
