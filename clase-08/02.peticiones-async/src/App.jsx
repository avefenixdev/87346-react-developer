import useTitulo from "./hooks/useTitulo"

const App = () => {

  useTitulo('Buscador de películas')

  return (
      <h1 className="text-yellow-700 text-4xl">Mi app películas!</h1>
  )
}

export default App