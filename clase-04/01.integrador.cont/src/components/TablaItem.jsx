import Swal from "sweetalert2";

const TablaItem = ({product, handlerRemove}) => { // props = { product }

  const handlerDelete = async (id) => {
    console.log(id)

    try {
      const result = Swal.fire({
        title: "¿Estás seguro?",
        text: "Mira que no se va volver a ver ese producto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, papaaaaa",
        cancelButtonText: "Nooooooooooooooooooo"
      })

     console.log(result)
     const isDelete = await result
      

      if ( isDelete.isConfirmed ) {
          handlerRemove(id)
          
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          })
      };

    } catch (error) {
      console.error(error)
    }
    

   
  }

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
        <button onClick={() => handlerDelete(product.id)} className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100 rounded-md transition">
          Borrar
        </button>
      </td>
    </tr>
  )
}

export default TablaItem