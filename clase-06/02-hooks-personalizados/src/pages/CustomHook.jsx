import Contador from "../components/Contador"

const CustomHook = () => {
  return (
    <>
        <h1 className="text-4xl">Ganchos personalizados (custom hooks)</h1>
        <hr />

        <h2 className="text-3xl">Componente sin custom hooks</h2>

        <Contador /> 

        <h2>Componente con custom hooks</h2>
    
    </>
  )
}

export default CustomHook