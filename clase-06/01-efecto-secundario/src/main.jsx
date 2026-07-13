import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Rutas from './routers/Rutas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      <main className='container mx-auto'>
        <Rutas />
      </main>

      {/* Footer */}
      
    </BrowserRouter>
  </StrictMode>,
)
