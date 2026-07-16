import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Productos from "../pages/Productos"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import NoEncontrado from "../pages/NoEncontrado"
import EfectoSecundario from "../pages/EfectoSecundario"
import CustomHook from "../pages/CustomHook"
import Contexto from "../pages/Contexto"



const Rutas = () => {

    const appRutas = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/custom-hook',
                element: <CustomHook />
            },
            {
                path: '/context',
                element: <Contexto />
            },
            {
                path: '/productos',
                element: <Productos />
            },
            {
                path: '/efecto-secundario',
                element: <EfectoSecundario />
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