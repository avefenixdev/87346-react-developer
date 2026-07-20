import { useEffect, useState } from "react"
import userService from "./services/userService"
import { useNavigate } from "react-router"

const App = () => {

  const navigate = useNavigate()

  //const [usuarios, setUsuarios] = useState([])
  const [usuarios, setUsuarios] = useState(null)

  /* const peticion = async () => {

    try {
      
      

      const res = await fetch(url)
      
      if(!res.ok) {
        throw new Error('No se pudo obtener los productos')
      }

      // Si llegó acá quiere decir que está todo piola
      const usuariosjsonp = await res.json()

      //console.log(usuarios)
      setUsuarios(usuariosjsonp) // Cuando cambio el estado -> se dispara automaticamente el rerenderizado

    } catch (error) {
      console.error(error)
    }

  } */

  useEffect(() => {
    const load = async () => {
      const data = await userService().getUsers()
      setUsuarios(data)

      //console.log(data)
    }

    load()

  }, [])

  const handleVer = (id) => {
    navigate(`/detalle/${id}`)
  }

  // Optional chaining

  /* const obj = {
      nombre: 'Maxi'
  } 
      
  obj?.nombre // si no existe no accedo a nombre y si existe accedo al valor dentro de la key

  */

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm">

    {/* <!-- Header --> */}
    <div className="flex flex-col gap-4 border-b border-slate-200 p-6 md:flex-row md:items-center md:justify-between">

        <div>
            <h1 className="text-2xl font-bold text-slate-800">
                Usuarios
            </h1>

            <p className="text-sm text-slate-500">
                Administra los usuarios del sistema.
            </p>
        </div>

        <button
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
            + Nuevo Usuario
        </button>

    </div>

    {/* <!-- Barra de búsqueda --> */}
    <div className="flex flex-col gap-4 border-b border-slate-200 p-6 md:flex-row md:items-center md:justify-between">

        <input
            type="text"
            placeholder="Buscar usuario..."
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-blue-500 md:max-w-sm"/>

        <span className="text-sm text-slate-500">
            5 usuarios encontrados
        </span>

    </div>

    {/* <!-- Tabla --> */}
    <div className="overflow-x-auto">

        <table className="min-w-full">

            <thead className="bg-slate-50">

                <tr>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                        Nombre
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                        Usuario
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                        Email
                    </th>

                    <th className="px-6 py-4 text-center text-xs font-semibold uppercase text-slate-500">
                        Acciones
                    </th>

                </tr>

            </thead>

            <tbody className="divide-y divide-slate-100">

              {

                usuarios && usuarios.map(us => (
                  <tr key={us.id} className="hover:bg-slate-50">

                    <td className="px-6 py-4 font-medium text-slate-700">
                        {us.name}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                        {us.username}
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                        {us.email}
                    </td>

                    <td className="px-6 py-4">

                        <div className="flex justify-center gap-2">

                            {/*  <!-- Ver --> */}
                            <button
                                onClick={() => handleVer(us.id)}
                                className="cursor-pointer rounded-lg border border-slate-300 p-2 text-slate-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                                title="Ver">
                                👁
                            </button>

                            {/* <!-- Editar --> */}
                            <button
                                className="rounded-lg border border-slate-300 p-2 text-slate-600 transition hover:border-amber-500 hover:bg-amber-50 hover:text-amber-600"
                                title="Editar">
                                ✏️
                            </button>

                            {/* <!-- Eliminar --> */}
                            <button
                                className="rounded-lg border border-slate-300 p-2 text-slate-600 transition hover:border-red-500 hover:bg-red-50 hover:text-red-600"
                                title="Eliminar">
                                🗑
                            </button>

                        </div>

                    </td>

                  </tr>
                ))

              }

               {/*  <!-- Más registros --> */}

            </tbody>

        </table>

    </div>

    {/* <!-- Footer --> */}
    <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 p-6 text-sm text-slate-500 md:flex-row">

        <span>
            Mostrando 1 - 10 de 52 usuarios
        </span>

        <div className="flex gap-2">

            <button className="rounded-lg border px-3 py-2 hover:bg-slate-100">
                Anterior
            </button>

            <button className="rounded-lg bg-blue-600 px-3 py-2 text-white">
                1
            </button>

            <button className="rounded-lg border px-3 py-2 hover:bg-slate-100">
                2
            </button>

            <button className="rounded-lg border px-3 py-2 hover:bg-slate-100">
                3
            </button>

            <button className="rounded-lg border px-3 py-2 hover:bg-slate-100">
                Siguiente
            </button>

        </div>

    </div>

</div>
  )
}

export default App