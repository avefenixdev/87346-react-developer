import { useEffect, useState } from "react"

const Formulario = ({ handlerCreate, productoAEditar, setProductoAEditar }) => {

    // variable de js
    const formInicial = {
        id: null,
        nombre: '',
        categoria: '',
        precio: 0
    }
    
    const [form, setForm] = useState(formInicial)
    console.log(form) // Estado de react.

    // hook -> useEffect
    useEffect(() => {
        console.log('Cambio la variable')
        if (productoAEditar) {
            setForm(productoAEditar)
        }  else {
            setForm(formInicial)
        } 
    }, [productoAEditar])



    const handleReset = () => {
        setForm(formInicial)
        setProductoAEditar(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Enviando la data...')

        //console.log(form)
        handlerCreate(form) // <---- form <-- productoNuevo
        // Se cargó el producto en la tabla y recién ahí limpio el formulario
        handleReset()
    }

    const handleChange = (e) => {
        //console.log(e.target.name)
        //console.log(e.target.value)

        const formNuevo = {
            ...form,
            [e.target.name]: (e.target.name === 'precio') ? Number(e.target.value) : e.target.value
        }
        //console.log(formNuevo)
        setForm(formNuevo) // cambiando el estado -> sin modificar el anterior
        //console.log(form) 
       

    }


    return (
        <div className="flex items-center justify-center p-4"> 
            {/* Contenedor del Formulario */}
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border border-gray-100">
                {/* Encabezado */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">Gestión de Producto</h2>
                    <p className="text-sm text-gray-500">Ingresa los detalles del producto a continuación.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Input: Nombre de producto */}
                    <div>
                        <label htmlFor="product_name" className="block text-sm font-medium text-gray-700 mb-1">Nombre del Producto</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            id="product_name"
                            name="nombre"
                            placeholder="Ej. Teclado Mecánico RGB"
                            required
                            value={form.nombre}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                        />
                    </div>

                    {/* Input: Categoría de producto */}
                    <div>
                        <label htmlFor="product_category" className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                        {/* <select
                            id="product_category"
                            name="categoria"
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 bg-white"
                        >
                            <option value="" disabled selected>Selecciona una categoría</option>
                            <option value="electronics">Electrónica</option>
                            <option value="clothing">Ropa</option>
                            <option value="home">Hogar</option>
                            <option value="software">Software</option>
                        </select> */}
                        <input
                            onChange={handleChange}
                            type="text"
                            id="product_name"
                            name="categoria"
                            placeholder="Ej. Electronica, Software"
                            required
                            value={form.categoria}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                        />
                    </div>

                    {/* Input: Precio de producto */}
                    <div>
                        <label htmlFor="product_price" className="block text-sm font-medium text-gray-700 mb-1">Precio ($)</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                                onChange={handleChange}
                                type="number"
                                id="product_price"
                                name="precio"
                                step="0.01"
                                min="0"
                                placeholder="0.00"
                                value={form.precio}
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
                            onClick={handleReset}
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