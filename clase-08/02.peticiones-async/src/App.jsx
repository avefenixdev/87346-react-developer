import { useEffect, useState } from "react"
import useTitulo from "./hooks/useTitulo"
import Spinner from "./components/Spinner"

const App = () => {

  const [usuarios, setUsuarios] = useState(null)

  useTitulo('Buscador de películas')

  const url = 'https://jsonplaceholder.typicode.com/users/'

  const peticionUsuarios = async () => {

    try {

      const res = await fetch(url) // Peticiones asincronica
      // res -> Tengo el objeto de la respuesta (El modelo de las respuesta de una petición http)
      // https://developer.mozilla.org/es/docs/Web/API/Response

      if ( !res.ok ) { // ok -> true o false
        throw new Error('No se pudo obtener los usuarios')
      }

      const data = await res.json() // text() -> documento de texto | blob() -> recibiendo un binario

      //console.log(data)
      setUsuarios(data)
      
    } catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {
    peticionUsuarios() // esto se ejecuta una sola vez
  }, [])
  
  

  return (
    <>
      <h1 className="text-yellow-700 text-4xl">Mi app películas!</h1>
      {

        usuarios ? (
          usuarios.map(element => (
            <p>{element.name}</p>
          )))
        : (
          <Spinner />
        )
      }
    </>
  )
}

export default App