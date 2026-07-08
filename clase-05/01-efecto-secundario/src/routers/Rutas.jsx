import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Productos from "../pages/Productos"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import NoEncontrado from "../pages/NoEncontrado"


const Rutas = () => {

    const appRutas = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/productos',
                element: <Productos />
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

    return appRutas

}

export default Rutas