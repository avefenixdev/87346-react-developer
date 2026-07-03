//rafce

import Formulario from "../components/Formulario"
import Tabla from "../components/Tabla"
import TituloPrincipal from "../components/TituloPrincipal"

const Productos = () => {
  return (
    <>
      <TituloPrincipal texto="CRUD Productos" />
      <hr />
      <p className="my-3">Ejemplo integrador para trabajar las props y estado en REACT</p>
      <Formulario /> 
      <Tabla />
    </>
  )
}

export default Productos