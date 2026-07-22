
// redux thunk -> me entrega el dispatch de las acciones sincronicas 

import { setListadoClientes } from ".."

// Acción thunk -> Asincrónica...
export const getAllClientesFetch = () => async (dispatch) => { // dispatch de acción sincrónica
    /* Petición asincrónica */
    const url = 'https://reqres.in/api/users?per_page=12'

    try {

        const options = {
            method: 'GET',
            headers: {
                'x-api-key': 'reqres_3458b837b04b40e6ab7ce1ddf3da9822', // api-key -> variable de entorno
                'content-type': 'application/json'
            }
        }

        const res = await fetch(url, options)

        if(!res.ok) {
            throw new Error('No se pudo obtener los clientes')
        }

        const clientes = await res.json()
        console.log(clientes)
        // tengo localmente los clientes -> Sincronico...
        dispatch(setListadoClientes(clientes.data))
        
    } catch (error) {
        console.error(error)
    }

}