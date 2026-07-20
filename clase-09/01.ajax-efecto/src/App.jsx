import { useEffect, useState } from "react"
import userService from "./services/userService"

const App = () => {

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

      console.log(data)
    }

    load()

  }, [])

  // Optional chaining

  /* const obj = {
      nombre: 'Maxi'
  } 
      
  obj?.nombre // si no existe no accedo a nombre y si existe accedo al valor dentro de la key

  */

  return (
    <>

      <div class="w-full rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">

        {/* <!-- Header --> */}
        <div class="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div>
            <h2 class="text-xl font-semibold text-slate-800">
              Usuarios
            </h2>
            <p class="text-sm text-slate-500">
              Lista de usuarios registrados.
            </p>
          </div>

          <span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            5 Usuarios
          </span>
        </div>

        {/* <!-- Tabla --> */}
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-slate-200">

            <thead class="bg-slate-50">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Nombre
                </th>

                <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Usuario
                </th>

                <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-slate-100 bg-white">

              <tr class="transition-colors hover:bg-slate-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">

                    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                      J
                    </div>

                    <span class="font-medium text-slate-700">
                      Juan Pérez
                    </span>

                  </div>
                </td>

                <td class="px-6 py-4 text-slate-600">
                  jperez
                </td>

                <td class="px-6 py-4 text-slate-600">
                  juan@email.com
                </td>
              </tr>

              <tr class="transition-colors hover:bg-slate-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">

                    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                      M
                    </div>

                    <span class="font-medium text-slate-700">
                      María Gómez
                    </span>

                  </div>
                </td>

                <td class="px-6 py-4 text-slate-600">
                  mgomez
                </td>

                <td class="px-6 py-4 text-slate-600">
                  maria@email.com
                </td>
              </tr>

              <tr class="transition-colors hover:bg-slate-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">

                    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 font-semibold text-purple-700">
                      L
                    </div>

                    <span class="font-medium text-slate-700">
                      Lucas Fernández
                    </span>

                  </div>
                </td>

                <td class="px-6 py-4 text-slate-600">
                  lfernandez
                </td>

                <td class="px-6 py-4 text-slate-600">
                  lucas@email.com
                </td>
              </tr>

              <tr class="transition-colors hover:bg-slate-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">

                    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-semibold text-orange-700">
                      A
                    </div>

                    <span class="font-medium text-slate-700">
                      Ana Torres
                    </span>

                  </div>
                </td>

                <td class="px-6 py-4 text-slate-600">
                  atorres
                </td>

                <td class="px-6 py-4 text-slate-600">
                  ana@email.com
                </td>
              </tr>

              <tr class="transition-colors hover:bg-slate-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">

                    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 font-semibold text-pink-700">
                      C
                    </div>

                    <span class="font-medium text-slate-700">
                      Carlos Ruiz
                    </span>

                  </div>
                </td>

                <td class="px-6 py-4 text-slate-600">
                  cruiz
                </td>

                <td class="px-6 py-4 text-slate-600">
                  carlos@email.com
                </td>
              </tr>

            </tbody>

          </table>
        </div>

      </div>
    </>
  )
}

export default App