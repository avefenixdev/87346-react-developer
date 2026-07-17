import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rutas from './routes/Rutas.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <main className="container mx-auto">
      <Rutas />
     </main>
    </BrowserRouter>
  </StrictMode>,
)
