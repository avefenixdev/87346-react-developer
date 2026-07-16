import { useContext } from "react"
import ProductosContext from "../contexts/ProductosContext"

const useProductos = () => {
  return useContext(ProductosContext)
}

export default useProductos
