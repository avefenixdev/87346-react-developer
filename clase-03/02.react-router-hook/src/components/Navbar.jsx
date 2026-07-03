import { Link, NavLink } from "react-router"

const Navbar = () => {

    const cambioColor = ({ isActive }) => { //props = {}
        return isActive ? {color: 'red'} : { color: 'blue'} 
    }

    const cambioClases = ({isActive}) => {
        return isActive ? 'rounded-lg bg-cyan-500 px-4 py-2 text-white transition hover:bg-cyan-600' : 'transition hover:text-cyan-400'
    }


  return (
    <header>
        <nav className="bg-slate-900 shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-white hover:text-cyan-400 transition"
                    >
                        Mi Sitio
                </Link>

                {/* Menú */}
                <ul className="flex items-center gap-8 text-white font-medium">

                <li>
                    <NavLink
                        to="/"
                        /* style={cambioColor} */
                        className={cambioClases}
                    >
                        Inicio
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        /* style={cambioColor} */
                        to="/productos"
                        className={cambioClases}
                    >
                    Productos
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        /* style={cambioColor} */
                        to="/servicios"
                        className={cambioClases}
                    >
                    Servicios
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        /* style={cambioColor} */
                        to="/nosotros"
                        className={cambioClases}
                    >
                    Nosotros
                    </NavLink>
                </li>

                <li>
                    <NavLink
                       /*  style={cambioColor} */
                        to="/contacto"
                        className={cambioClases}
                    >
                    Contacto
                    </NavLink>
                </li>

                </ul>

            </div>
        </nav>
    </header>
  )
}

export default Navbar