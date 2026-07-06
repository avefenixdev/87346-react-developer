//rafce
import { useState } from "react"
import Formulario from "../components/Formulario"
import Tabla from "../components/Tabla"
import TituloPrincipal from "../components/TituloPrincipal"
import productos from "../constants/productos"

const Productos = () => {

  const [products, setProducts] = useState(productos)

  const handlerCreate = (productoNuevo) => {
    console.log(productoNuevo)
    // Ejemplo didactico donde el id lo generamos en el cliente pero en la realidad el id se generar siempre en el backend
    productoNuevo.id = window.crypto.randomUUID()
    console.log(productoNuevo)

    // products.push(productoNuevo) // ! <-------------- estoy modificando el estado directamente

    const nuevoArrayProductos = [...products, productoNuevo]
    setProducts(nuevoArrayProductos)
  }

  const handlerEdit = () => {

  }
  
  const handlerRemove = (idProductoABorrar) => {
    console.log(idProductoABorrar)
    /* debugger */
    const nuevoEstado = products.filter(prod => prod.id !== idProductoABorrar)
    console.log(nuevoEstado) // Un nuevo array con todos los productos que tenía en el estado pero sin el producto a eliminar

    setProducts(nuevoEstado)

  }


  return (
    <>
      <TituloPrincipal texto="CRUD Productos" />
      <hr />
      <p className="my-3">Ejemplo integrador para trabajar las props y estado en REACT</p>
      <Formulario handlerCreate={handlerCreate} /> 
      <Tabla products={products} handlerRemove={handlerRemove} />
    </>
  )
}

export default Productos