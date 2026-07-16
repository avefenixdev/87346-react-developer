import { Link } from "react-router";
import useProductos from "../hooks/useProductos";
import handlerNotificacion from "../utils/handler-notificacion";

const TablaItem = ({ product }) => { // props = { product }

  const { handlerRemove, setProductoAEditar } = useProductos()

  const handlerDelete = async (id) => {
    console.log(id)

    try {
      // await handlerNotificacion(callback)
      await handlerNotificacion(() => {
        handlerRemove(id)
      })
      
    } catch (error) {
      console.error(error)
    }

  }

  const handlerActualizar = (productoAEditar) => {
    setProductoAEditar(productoAEditar)
  }

  return (
    <tr className="hover:bg-gray-50/70 transition-colors">
      <td className="px-6 py-4 font-medium text-gray-900">{product.nombre}</td>
      <td className="px-6 py-4">
        <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-md font-medium">{product.categoria}</span>
      </td>
      <td className="px-6 py-4 font-mono font-medium text-gray-900">${product.precio}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
        <Link to={`detalle/${product.id}`} className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
          Ver
        </Link>
        <button onClick={() => handlerActualizar(product)} className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md transition">
          Editar
        </button>
        <button onClick={() => handlerDelete(product.id)} className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100 rounded-md transition">
          Borrar
        </button>
      </td>
    </tr>
  )
}

export default TablaItem