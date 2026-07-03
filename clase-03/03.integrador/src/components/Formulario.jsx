
const Formulario = () => {
    return (
        <div className="flex items-center justify-center p-4"> 
            {/* Contenedor del Formulario */}
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border border-gray-100">
                {/* Encabezado */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">Gestión de Producto</h2>
                    <p className="text-sm text-gray-500">Ingresa los detalles del producto a continuación.</p>
                </div>

                <form action="#" method="POST" className="space-y-5">

                    {/* Input: Nombre de producto */}
                    <div>
                        <label htmlFor="product_name" className="block text-sm font-medium text-gray-700 mb-1">Nombre del Producto</label>
                        <input
                            type="text"
                            id="product_name"
                            name="product_name"
                            placeholder="Ej. Teclado Mecánico RGB"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                        />
                    </div>

                    {/* Input: Categoría de producto */}
                    <div>
                        <label htmlFor="product_category" className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                        <select
                            id="product_category"
                            name="product_category"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 bg-white"
                        >
                            <option value="" disabled selected>Selecciona una categoría</option>
                            <option value="electronics">Electrónica</option>
                            <option value="clothing">Ropa</option>
                            <option value="home">Hogar</option>
                            <option value="software">Software</option>
                        </select>
                    </div>

                    {/* Input: Precio de producto */}
                    <div>
                        <label htmlFor="product_price" className="block text-sm font-medium text-gray-700 mb-1">Precio ($)</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                                type="number"
                                id="product_price"
                                name="product_price"
                                step="0.01"
                                min="0"
                                placeholder="0.00"
                                required
                                className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                            />
                        </div>
                    </div>

                    {/* Separador */}
                    <hr className="border-gray-200 my-6" />

                    {/* Botones */}
                    <div className="flex items-center justify-end space-x-3 pt-2">
                        {/* Botón Reset */}
                        <button
                            type="reset"
                            className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-200"
                        >
                            Limpiar
                        </button>

                        {/* Botón Enviar / Editar */}
                        <button
                            type="submit"
                            className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-colors duration-200"
                        >
                            Guardar Producto
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Formulario