import { createSlice } from "@reduxjs/toolkit";

export const clientesSlice = createSlice(
    {
        name: 'clientes',
        initialState: {
            listadoClientes: null
        },
        reducers: { /* reducers sincrónicos -> Es la modificación del estado del store localmente */
            setListadoClientes: (state, action) => {
                state.listadoClientes = action.payload
            }
        }
    }
)

// Exportamos las acciones sincrónicas
export const { setListadoClientes } = clientesSlice.actions

// Exportamos el reducer
export default clientesSlice.reducer