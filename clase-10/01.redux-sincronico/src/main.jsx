import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Rutas from './routes/Rutas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <main className="container mx-auto mt-8">
        <Rutas />
      </main>
    </BrowserRouter>
  </StrictMode>,
)
