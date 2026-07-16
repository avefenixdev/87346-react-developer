import { createContext, useState } from 'react'
import productos from '../constants/productos'

const ProductosContext = createContext()

const ProductosProvider = ( { children } ) => {

    const [products, setProducts] = useState(productos)
    const [productoAEditar, setProductoAEditar] = useState(null)

    const handlerCreate = (productoNuevo) => {
        console.log(productoNuevo)
        // Ejemplo didactico donde el id lo generamos en el cliente pero en la realidad el id se generar siempre en el backend
        productoNuevo.id = window.crypto.randomUUID()
        console.log(productoNuevo)

        // products.push(productoNuevo) // ! <-------------- estoy modificando el estado directamente

        const nuevoArrayProductos = [...products, productoNuevo]
        setProducts(nuevoArrayProductos)
    }

    const handlerEdit = (productoEditado) => {
        console.log(productoEditado)
        debugger
        const nuevoEstadoProductos = products.map(prod => prod.id === productoEditado.id ? productoEditado : prod)
        console.log(nuevoEstadoProductos) // Un nuevo array con todos los productos sin editar más el producto editado
        setProducts(nuevoEstadoProductos)

    }
    
    const handlerRemove = (idProductoABorrar) => {
        console.log(idProductoABorrar)
        /* debugger */
        const nuevoEstado = products.filter(prod => prod.id !== idProductoABorrar)
        console.log(nuevoEstado) // Un nuevo array con todos los productos que tenía en el estado pero sin el producto a eliminar

        setProducts(nuevoEstado)

    }

    const getProductoById = (id) => {
        id = Number(id)
        //console.log(id)
        const producto = products.find(prod => prod.id === id)
        //console.log(producto)
        return producto 
    }


    const data = {
        products,
        productoAEditar,
        handlerCreate,
        handlerEdit,
        handlerRemove,
        setProductoAEditar,
        getProductoById
    }

    return <ProductosContext.Provider value={data}>{ children }</ProductosContext.Provider>
}

export { ProductosProvider }
export default ProductosContext

