import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // App es un componente -> ejemplo

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
   {/*  <App /> */} {/* Si no le coloco nada entre etiqueta de apertura y cierre, utilizo esta forma */}
  </StrictMode>,
)
