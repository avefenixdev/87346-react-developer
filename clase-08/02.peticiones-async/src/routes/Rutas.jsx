import { useRoutes } from "react-router"
import App from "../App"
import NoEncontrado from "../components/NoEncontrado"

const Rutas = () => {
  return useRoutes(
    [
        {
            path: '/',
            element: <App />
        },
        {
            path: '*',
            element: <NoEncontrado />
        }
    ]
  )
}

export default Rutas