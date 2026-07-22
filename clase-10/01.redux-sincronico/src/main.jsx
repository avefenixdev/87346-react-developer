import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Rutas from './routes/Rutas.jsx'
import { Provider } from 'react-redux'
import configuracion from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={configuracion}> {/* El provider entrega los estados del store a todos los componentes que envuelve */}
      <BrowserRouter>
        <main className="container mx-auto mt-8">
          <Rutas />
        </main>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
