import { useNavigate, useParams } from "react-router"
import useProductos from "../hooks/useProductos"
import { useEffect, useState } from "react"

const ProductosDetalle = () => {

  const [producto, setProducto] = useState(null)

  const { id } = useParams()
  const navigate = useNavigate()
  console.log(id)

  const { getProductoById } = useProductos()

  useEffect(() => {
    const productoEncontrado = getProductoById(id)
    setProducto(productoEncontrado)
  }, [id, getProductoById])
  
  const handlerVolverAListado = () => {
    navigate('/productos')
  }

  return (
    <>
        {
            producto ? (
                 <div className="max-w-7xl mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* <!-- Imagen del producto --> */}
                        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://placehold.co/800x800"
                                alt="Producto"
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>

                    {/*  <!-- Información --> */}
                        <div className="flex flex-col justify-between">

                            <div>

                            {/*  <!-- Categoría --> */}
                                <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full">
                                    {producto ? producto.categoria : 'No encontrado'}
                                </span>

                            {/*  <!-- Nombre --> */}
                                <h1 className="text-4xl font-bold text-gray-900 mt-4">
                                    {producto ? producto.nombre : 'No encontrado'}
                                </h1>

                            {/*  <!-- Precio --> */}
                                <div className="mt-6">
                                    <span className="text-5xl font-extrabold text-indigo-600">
                                        ${producto ? producto.precio : 'No encontrado'}
                                    </span>
                                </div>

                                {/* <!-- Descripción --> */}
                                <p className="mt-6 text-gray-600 leading-7">
                                    Notebook profesional equipada con procesador Intel Core i7,
                                    16GB de memoria RAM, SSD NVMe de 512GB y pantalla Full HD
                                    de 16". Ideal para desarrollo de software, diseño y trabajo
                                    de oficina.
                                </p>

                            </div>

                            {/* <!-- Botones --> */}
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">

                                <button
                                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 shadow-md">
                                    Agregar al carrito
                                </button>

                                <button
                                    className="border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 text-gray-700 font-semibold py-3 px-8 rounded-xl transition duration-300">
                                    Comprar ahora
                                </button>

                            </div>

                            {/* <!-- Información adicional --> */}
                            <div className="mt-10 border-t pt-6">

                                <div className="grid grid-cols-2 gap-4 text-sm">

                                    <div>
                                        <p className="text-gray-500">Categoría</p>
                                        <p className="font-semibold text-gray-800"> {producto ? producto.categoria : 'No encontrado'}</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">Disponibilidad</p>
                                        <p className="font-semibold text-green-600">En Stock</p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">Envío</p>
                                        <p className="font-semibold text-gray-800">
                                            Gratis
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">Garantía</p>
                                        <p className="font-semibold text-gray-800">
                                            12 meses
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    </div>
            ) : (
                <div className="min-h-[70vh] flex items-center justify-center px-6">

                    <div className="max-w-lg w-full text-center bg-white rounded-2xl shadow-lg border border-gray-200 p-10">

                        {/* <!-- Ícono --> */}
                        <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full bg-red-100">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-red-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v4m0 4h.01M10.29 3.86L1.82 18A2 2 0 003.55 21h16.9a2 2 0 001.73-3l-8.47-14.14a2 2 0 00-3.46 0z"/>
                            </svg>
                        </div>

                        {/* <!-- Título --> */}
                        <h1 className="mt-6 text-3xl font-bold text-gray-900">
                            Producto no encontrado
                        </h1>

                        {/* <!-- Mensaje --> */}
                        <p className="mt-4 text-gray-600 leading-7">
                            El producto que intentas visualizar no existe, fue eliminado
                            o el enlace no es válido.
                        </p>

                        {/* <!-- Botones --> */}
                        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                            <button
                                onClick={handlerVolverAListado}
                                className="cursor-pointer px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
                                Volver al listado
                            </button>

                            <button
                                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:border-indigo-600 hover:text-indigo-600 transition">
                                Ir al inicio
                            </button>

                        </div>

                    </div>

                </div>
            )
        }
    
    </>

  
  )
}

export default ProductosDetalle