import Contador from "./components/estados/Contador"
import TituloPrincipal from "./components/TituloPrincipal"

// rafce
const App = () => {
  return (
    <>
      <TituloPrincipal texto="Título Principal" />
      {/* <TituloPrincipal texto="Otro título" /> */}
      <Contador valorInicial={22} />
      <Contador valorInicial={33} />
    </>
  )
}

export default App