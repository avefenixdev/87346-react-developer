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
            console.log(data)
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

        <div class="mt-6 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

        {/* <!-- Encabezado --> */}
        <div class="flex items-center justify-between px-6 py-5 border-b border-gray-200">
            <div>
                <h2 class="text-2xl font-bold text-gray-900">
                    Productos
                </h2>
                <p class="text-sm text-gray-500 mt-1">
                    Listado de productos disponibles
                </p>
            </div>

            <button
                class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl transition">
                Nuevo producto
            </button>
        </div>

        {/* <!-- Tabla --> */}
        <div class="overflow-x-auto">

            <table class="w-full text-left">

                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-4 text-sm font-semibold text-gray-600">
                            Producto
                        </th>

                        <th class="px-6 py-4 text-sm font-semibold text-gray-600">
                            Categoría
                        </th>

                        <th class="px-6 py-4 text-sm font-semibold text-gray-600">
                            Precio
                        </th>

                        <th class="px-6 py-4 text-sm font-semibold text-gray-600">
                            Stock
                        </th>

                        <th class="px-6 py-4 text-sm font-semibold text-center text-gray-600">
                            Estado
                        </th>

                        <th class="px-6 py-4 text-sm font-semibold text-right text-gray-600">
                            Acciones
                        </th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">

                     {
                        productos ? (
                                productos.map(p => (
                                    <tr class="hover:bg-gray-50 transition">

                                        <td class="px-6 py-4">
                                            <div>
                                                <p class="font-semibold text-gray-900">
                                                    {p.nombre}
                                                </p>
                                                <p class="text-sm text-gray-500">
                                                    Código: PRO-001
                                                </p>
                                            </div>
                                        </td>

                                        <td class="px-6 py-4 text-gray-700">
                                            {p.categoria}
                                        </td>

                                        <td class="px-6 py-4 font-semibold text-indigo-600">
                                            ${p.precio}
                                        </td>

                                        <td class="px-6 py-4 text-gray-700">
                                            18
                                        </td>

                                        <td class="px-6 py-4 text-center">
                                            <span class="inline-flex px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                                                Disponible
                                            </span>
                                        </td>

                                        <td class="px-6 py-4">
                                            <div class="flex justify-end gap-2">

                                                <button class="px-4 py-2 rounded-lg border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 transition">
                                                    Ver
                                                </button>

                                                <button class="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                                                    Editar
                                                </button>

                                            </div>
                                        </td>

                                    </tr>
                                )
                            )
                        ) : (
                            <p>No se encontraron los productos</p>
                        )
                    }
                    

                   
                </tbody>

            </table>

        </div>

    </div>

        <ul>
           
        </ul>
    </>
  )
}

export default Productos