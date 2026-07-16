import { useContext } from "react"
import Contador from "../components/Contador"
import ContadorCustomHook from "../components/ContadorCustomHook"
import useTitulo from "../hooks/useTitulo"
import TemaContext from "../contexts/TemaContext"

const CustomHook = () => {

  useTitulo('Custom Hook')
  const { color } = useContext(TemaContext)

  return (
    <>
        <h1 className={`text-4xl mt-6 ${color}`}>Ganchos personalizados (custom hooks)</h1>
        <hr />

        <h2 className="text-3xl">Componente sin custom hooks</h2>

        <Contador /> 

        <h2>Componente con custom hooks</h2>

        <ContadorCustomHook />
    
    </>
  )
}

export default CustomHook