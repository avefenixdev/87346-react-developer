import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rutas from './routes/Rutas.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <main className="flex flex-col min-h-screen bg-linear-to-br from-gray-950 via-slate-900 to-black px-6 text-white">
      <Rutas />
     </main>
    </BrowserRouter>
  </StrictMode>,
)
