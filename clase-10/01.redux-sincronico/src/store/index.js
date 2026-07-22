import { configureStore } from "@reduxjs/toolkit" // ES Module
import contador from "./slices/contador"


const configuracion = configureStore(
    {
        reducer: { /* acá dentro de este objeto van los diferentes slices */
            contador, // contadorSlice
        }
    }
)

export default configuracion