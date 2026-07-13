import { useEffect } from "react"

const Productos = () => {

  useEffect(() => {
    document.title = 'Educación IT - Productos'
  }, [])
  
  return (
    <div>Producto</div>
  )
}

export default Productos