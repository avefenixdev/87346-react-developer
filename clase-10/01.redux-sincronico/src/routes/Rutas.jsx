import { useRoutes } from "react-router"
import App from "../App"
import UsuarioDetalle from "../pages/UsuarioDetalle"
import NoEncontrado from "../pages/NoEncontrado"
import FormularioCreacion from "../pages/FormularioCreacion"
import Redux from "../pages/Redux"

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
                path: '/formu-creacion',
                element: <FormularioCreacion />
            },
            {
                path: '/redux',
                element: <Redux />
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