// rafce
import useTitulo from "../hooks/useTitulo"
import useTema from "../hooks/useTema"

const Inicio = () => {

  useTitulo('Inicio')
  const obj = useTema()
  console.log(obj)
  
  return (
    <h1 className={`text-4xl mt-6 ${obj.color}`}>Bienvenidos a mi página</h1>
  )
}

export default Inicio