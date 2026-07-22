import { createSlice } from "@reduxjs/toolkit";

export const contadorSlice = createSlice( // export para incorporarlo dentro del store
    {
        name: 'contador', /* nombre del slice */
        initialState: { /* valores iniciales de los estados que voy a tener dentro del slice */
            contador: 55
        },
        reducers: {
            incrementar: (estado) => {
                console.log(estado)
                estado.contador += 1
            },
            decrementar: (estado) => {
                estado.contador = estado.contador - 1
            },
            incrementarPorValor: (estado, accion) => {
                //console.log(estado)
                //console.log(accion) // { type, payload }
                estado.contador = estado.contador + accion.payload // 77 -> 99
            }
        }
    }
)

// Para crear las acciones, hacemos una exportación accediendo a la clave actions del slice
export const { incrementar, decrementar, incrementarPorValor } = contadorSlice.actions 
export default contadorSlice.reducer // Exporto el reducer como funcionalidad principal del modulo