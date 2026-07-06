//rafce
import { useState } from "react"
import Formulario from "../components/Formulario"
import Tabla from "../components/Tabla"
import TituloPrincipal from "../components/TituloPrincipal"
import productos from "../constants/productos"

const Productos = () => {

  const [products, setProducts] = useState(productos)

  return (
    <>
      <TituloPrincipal texto="CRUD Productos" />
      <hr />
      <p className="my-3">Ejemplo integrador para trabajar las props y estado en REACT</p>
      <Formulario setProducts={setProducts} /> 
      <Tabla products={products} />
    </>
  )
}

export default Productos