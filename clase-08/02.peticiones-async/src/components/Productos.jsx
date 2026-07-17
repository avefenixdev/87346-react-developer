import { useEffect, useState } from "react"

const Productos = () => {

    const [productos, setProductos] = useState(null)

    const url = import.meta.env.VITE_URL
    //console.log(url)

    const peticionProductos = async() => {

        try {
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error('No se pudo obtener los productos')
            }
            const data = await res.json()
            //console.log(data)
            setProductos(data)
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
      peticionProductos()
    }, [])
    
    

  return (
    <>
        <h2 className="text-violet-700 text-5xl font-medium">Listado de productos en una tabla</h2>

        <div className="mt-6 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

        {/* <!-- Encabezado --> */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">
                    Productos
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Listado de productos disponibles
                </p>
            </div>

            <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl transition">
                Nuevo producto
            </button>
        </div>

        {/* <!-- Tabla --> */}
        <div className="overflow-x-auto">

            {
                productos ? (
                    <table className="w-full text-left">

                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Producto
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Categoría
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Precio
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Stock
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-center text-gray-600">
                                Estado
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-right text-gray-600">
                                Acciones
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">

                        {
                            productos && productos.map(p => (
                                    <tr className="hover:bg-gray-50 transition" key={p.id}>

                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-semibold text-gray-900">
                                                    {p.nombre}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Código: PRO-001
                                                </p>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4 text-gray-700">
                                            {p.categoria}
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-indigo-600">
                                            ${p.precio}
                                        </td>

                                        <td className="px-6 py-4 text-gray-700">
                                            18
                                        </td>

                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                                                Disponible
                                            </span>
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex justify-end gap-2">

                                                <button className="px-4 py-2 rounded-lg border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 transition">
                                                    Ver
                                                </button>

                                                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                                                    Editar
                                                </button>

                                            </div>
                                        </td>

                                    </tr>
                                )
                            )
                        }
                        

                    
                    </tbody>

                </table>
                ) : (
                    <p>Hola</p>
                )
            }

            

        </div>

    </div>

        <ul>
           
        </ul>
    </>
  )
}

export default Productos