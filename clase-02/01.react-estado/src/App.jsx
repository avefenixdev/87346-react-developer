import Contenedor from "./components/Contenedor"
import Contador from "./components/estados/Contador"
import TituloPrincipal from "./components/TituloPrincipal"

// rafce
const App = () => {
  return (
    <Contenedor>
      <TituloPrincipal texto="Título Principal" />
      <TituloPrincipal texto="Otro título" />
      <Contador valorInicial={22} />
      <Contador valorInicial={33} />
    </Contenedor>
  )
}

export default App