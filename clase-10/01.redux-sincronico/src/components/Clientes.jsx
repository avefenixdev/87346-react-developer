import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllClientesFetch } from "../store/slices/clientes/action-thunk/getAllClientesFetch"

const Clientes = () => {

    const { listadoClientes } = useSelector(store => store.clientes)
    console.log(listadoClientes) // null

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllClientesFetch()) // disparo la acción asincrónica
    }, [])
    

  return (
    <>
        <h2 className="text-5xl">Listado de clientes!</h2>
        <hr />
        {
            listadoClientes && listadoClientes.map(cliente => (
                <>
                    <p key={cliente.id}>{cliente.first_name} {cliente.last_name}</p>
                   {/*  <img src={cliente.avatar} alt={cliente.first_name} width="50px" /> */}
                </>
            ))
        }
    
    </>
  )
}

export default Clientes