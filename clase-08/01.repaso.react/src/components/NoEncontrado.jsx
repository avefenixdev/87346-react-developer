import { Link } from "react-router"

const NoEncontrado = () => {
  return (
      <section className="max-w-2xl text-center">

        {/* Icono */}
        <div className="mb-8">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-gray-700 bg-gray-800 text-6xl shadow-2xl animate-pulse">
            🎬
          </div>
        </div>

        {/* Error */}
        <span className="inline-block rounded-full bg-red-600/20 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-red-400 border border-red-500/30">
          Error 404
        </span>

        {/* Título */}
        <h1 className="mt-6 text-5xl font-extrabold md:text-7xl">
          Página no encontrada
        </h1>

        {/* Descripción */}
        <p className="mt-6 text-lg leading-relaxed text-gray-400">
          Lo sentimos, la película o la página que estás buscando no está
          disponible. Quizás cambió de ubicación o nunca existió.
        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold transition-all duration-300 hover:bg-red-500 hover:scale-105"
          >
            🏠 Volver al inicio
          </Link>

          <Link
            to="/peliculas"
            className="rounded-xl border border-gray-700 bg-gray-800 px-6 py-3 font-semibold transition-all duration-300 hover:bg-gray-700 hover:scale-105"
          >
            🎥 Explorar películas
          </Link>

        </div>

        {/* Separador */}
        <div className="my-12 h-px bg-gray-800"></div>

        {/* Mensaje */}
        <p className="italic text-gray-500">
          "Parece que esta escena fue eliminada del montaje final."
        </p>

      </section>
  )
}

export default NoEncontrado