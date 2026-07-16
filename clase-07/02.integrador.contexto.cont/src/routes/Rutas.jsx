import { useRoutes } from "react-router"
import Productos from "../pages/Productos"
import App from "../App"
import Servicios from "../pages/Servicios"
import Nosotros from "../pages/Nosotros"
import NoEncontrado from "../pages/NoEncontrado"
import Contacto from "../pages/Contacto"
import ProductosDetalle from "../pages/ProductosDetalle"

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
                path: '/productos/detalle/:id',
                element: <ProductosDetalle />
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