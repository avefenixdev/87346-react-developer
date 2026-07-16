import useTitulo from "../hooks/useTitulo"
import useTema from "../hooks/useTema"

const Productos = () => {

  useTitulo('Productos')
  const { color } = useTema()
  
  return (
    <h1 className={`text-4xl mt-6 ${color}`}>Listado de productos</h1>
  )
}

export default Productos