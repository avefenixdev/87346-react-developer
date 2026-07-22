import { configureStore } from "@reduxjs/toolkit" // ES Module
import contador from "./slices/contador"
import clientes from "./slices/clientes"


const configuracion = configureStore(
    {
        reducer: { /* acá dentro de este objeto van los diferentes slices */
            contador, // contadorSlice
            clientes, // clientesSlice
        }
    }
)

export default configuracion