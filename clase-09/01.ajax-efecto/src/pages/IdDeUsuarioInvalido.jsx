import { Link } from "react-router";

function IdDeUsuarioInvalido() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center px-6">
            <div className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">
                    <span className="text-4xl">⚠️</span>
                </div>

                <h1 className="text-3xl font-bold text-slate-800">
                    Identificador inválido
                </h1>

                <p className="mt-4 text-slate-600">
                    El identificador del usuario debe ser un número entero.
                </p>

                <p className="mt-2 text-slate-500">
                    Verificá la URL e intentá nuevamente.
                </p>

                <div className="mt-8 flex justify-center gap-4">

                    <Link
                        to="/"
                        className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        Volver al listado
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                        Regresar
                    </button>

                </div>

            </div>
        </div>
    );
}

export default IdDeUsuarioInvalido