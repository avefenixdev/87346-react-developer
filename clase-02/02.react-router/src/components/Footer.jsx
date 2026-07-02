
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-6 py-10">

            <div className="grid gap-8 md:grid-cols-3">

            {/* Logo y descripción */}
            <div>
                <h2 className="text-2xl font-bold text-cyan-400">
                Mi Sitio
                </h2>

                <p className="mt-4 text-sm text-slate-400 leading-6">
                Ofrecemos productos y servicios de calidad para ayudarte a alcanzar
                tus objetivos con soluciones modernas y confiables.
                </p>
            </div>

            {/* Navegación */}
            <div>
                <h3 className="mb-4 text-lg font-semibold">
                Navegación
                </h3>

                <ul className="space-y-2 text-slate-400">
                <li>
                    <a href="/" className="hover:text-cyan-400 transition">
                    Inicio
                    </a>
                </li>

                <li>
                    <a href="/productos" className="hover:text-cyan-400 transition">
                    Productos
                    </a>
                </li>

                <li>
                    <a href="/servicios" className="hover:text-cyan-400 transition">
                    Servicios
                    </a>
                </li>

                <li>
                    <a href="/nosotros" className="hover:text-cyan-400 transition">
                    Nosotros
                    </a>
                </li>

                <li>
                    <a href="/contacto" className="hover:text-cyan-400 transition">
                    Contacto
                    </a>
                </li>
                </ul>
            </div>

            {/* Contacto */}
            <div>
                <h3 className="mb-4 text-lg font-semibold">
                Contacto
                </h3>

                <ul className="space-y-2 text-slate-400">
                <li>📍 Buenos Aires, Argentina</li>
                <li>📞 +54 11 1234-5678</li>
                <li>✉️ contacto@misitio.com</li>
                </ul>
            </div>

            </div>

            {/* Línea divisoria */}
            <div className="my-8 border-t border-slate-800"></div>

            {/* Copyright */}
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>
                &copy; {new Date().getFullYear()} Mi Sitio. Todos los derechos reservados.
            </p>

            <div className="flex gap-6">
                <a href="#" className="hover:text-cyan-400 transition">
                Facebook
                </a>

                <a href="#" className="hover:text-cyan-400 transition">
                Instagram
                </a>

                <a href="#" className="hover:text-cyan-400 transition">
                LinkedIn
                </a>

                <a href="#" className="hover:text-cyan-400 transition">
                GitHub
                </a>
            </div>
            </div>

        </div>
        </footer>
  )
}

export default Footer