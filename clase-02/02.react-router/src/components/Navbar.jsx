
const Navbar = () => {
  return (
    <header>
        <nav className="bg-slate-900 shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <a
                href="/"
                className="text-2xl font-bold text-white hover:text-cyan-400 transition"
                >
                Mi Sitio
                </a>

                {/* Menú */}
                <ul className="flex items-center gap-8 text-white font-medium">

                <li>
                    <a
                    href="/"
                    className="transition hover:text-cyan-400"
                    >
                    Inicio
                    </a>
                </li>

                <li>
                    <a
                    href="/productos"
                    className="transition hover:text-cyan-400"
                    >
                    Productos
                    </a>
                </li>

                <li>
                    <a
                    href="/servicios"
                    className="transition hover:text-cyan-400"
                    >
                    Servicios
                    </a>
                </li>

                <li>
                    <a
                    href="/nosotros"
                    className="transition hover:text-cyan-400"
                    >
                    Nosotros
                    </a>
                </li>

                <li>
                    <a
                    href="/contacto"
                    className="rounded-lg bg-cyan-500 px-4 py-2 text-white transition hover:bg-cyan-600"
                    >
                    Contacto
                    </a>
                </li>

                </ul>

            </div>
        </nav>
    </header>
  )
}

export default Navbar