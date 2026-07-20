import { useRoutes } from "react-router"
import App from "../App"
import UsuarioDetalle from "../pages/UsuarioDetalle"
import NoEncontrado from "../pages/NoEncontrado"

const Rutas = () => {

    const rutas = useRoutes(
        [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/detalle/:id',
                element: <UsuarioDetalle />
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