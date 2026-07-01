// Un componente en REACT -> es una Función
// Un componente por archivo (un componente por módulo)
import './App.css'
import Parrafo from './components/Parrafo'
import TituloPrincipal from './components/TituloPrincipal'

const App = () => {
  return (
    <>
      <h1>Hola mundo desde react</h1>

      <TituloPrincipal 
        texto="Título número 1" 
        color="blue" 
      />
      <Parrafo />
      <TituloPrincipal 
        texto="Título número 2" 
        color="green" 
      />
      <Parrafo />
      <TituloPrincipal 
        texto="Título número 3" 
        color="red" 
      />
      <Parrafo />
    </>
  )
}

export default App