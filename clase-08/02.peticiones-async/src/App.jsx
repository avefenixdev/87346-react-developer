import Productos from "./components/Productos"
import Usuarios from "./components/Usuarios"
import useTitulo from "./hooks/useTitulo"

const App = () => {
  useTitulo('Buscador de películas')
  
  return (
    <>
      <h1 className="text-yellow-700 text-4xl">Mi app películas!</h1>
      <Usuarios />
      
      <hr />

      <Productos />
    </>
  )
}

export default App