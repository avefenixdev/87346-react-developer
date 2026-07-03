// import TablaItem from "./TablaItem"



const Tabla = ({ products }) => {
    //console.log(products)

    return (
        <div className="p-6 flex items-center justify-center">
            {/*  <!-- Contenedor Principal de la Tabla --> */}
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">

                {/* <!-- Encabezado de la Tabla --> */}
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Productos Registrados</h3>
                        <p className="text-sm text-gray-500">Lista completa de los productos en inventario.</p>
                    </div>
                    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">3 Productos</span>
                </div>

                {/* <!-- Contenedor Responsive --> */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                <th className="px-6 py-3.5">Nombre del Producto</th>
                                <th className="px-6 py-3.5">Categoría</th>
                                <th className="px-6 py-3.5">Precio</th>
                                <th className="px-6 py-3.5 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
                            {
                                products.map(product => (
                                    <tr className="hover:bg-gray-50/70 transition-colors" key={product.id}>
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
                                ))
                            }



                        </tbody>
                    </table>
                </div>

                {/* <!-- Footer Opcional (Paginación) --> */}
                <div className="px-6 py-3.5 border-t border-gray-100 bg-gray-50/30 flex justify-between items-center text-xs text-gray-500">
                    <span>Mostrando 3 de 3 registros</span>
                    <div className="inline-flex space-x-1">
                        <button className="px-2.5 py-1 border border-gray-200 rounded hover:bg-gray-50 transition">Ant.</button>
                        <button className="px-2.5 py-1 border border-gray-200 rounded hover:bg-gray-50 transition">Sig.</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tabla