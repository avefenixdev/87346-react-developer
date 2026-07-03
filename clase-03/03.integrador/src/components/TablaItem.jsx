
const TablaItem = ({product}) => { // props = { product }
  return (
    <tr className="hover:bg-gray-50/70 transition-colors">
      <td className="px-6 py-4 font-medium text-gray-900">{product.nombre}</td>
      <td className="px-6 py-4">
        <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-md font-medium">{product.categoria}</span>
      </td>
      <td className="px-6 py-4 font-mono font-medium text-gray-900">${product.precio}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
        <button className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
          Ver
        </button>
        <button className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md transition">
          Editar
        </button>
        <button className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100 rounded-md transition">
          Borrar
        </button>
      </td>
    </tr>
  )
}

export default TablaItem