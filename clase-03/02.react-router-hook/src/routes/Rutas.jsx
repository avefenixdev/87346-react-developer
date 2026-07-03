import { useRoutes } from "react-router"
import Productos from "../pages/Productos"
import App from "../App"
import Servicios from "../pages/Servicios"
import Nosotros from "../pages/Nosotros"
import NoEncontrado from "../pages/NoEncontrado"
import Contacto from "../pages/Contacto"


const Rutas = () => {

    const rutas = useRoutes(
        [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/productos',
                element: <Productos />
            },
            {
                path: '/servicios',
                element: <Servicios />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: '/contacto',
                element: <Contacto />
            },
            {
                path: '*',
                element: <NoEncontrado />
            }
        ]
    )

    return rutas

}

export default Rutas