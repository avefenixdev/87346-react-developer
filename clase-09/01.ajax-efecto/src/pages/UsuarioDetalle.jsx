import { Link, useParams } from "react-router"
import IdDeUsuarioInvalido from "./IdDeUsuarioInvalido"

const UsuarioDetalle = () => {

    const { id } = useParams()
    console.log(id)

    const clienteId = Number(id)

    console.log(clienteId)

    if (Number.isNaN(clienteId)) {
        return <IdDeUsuarioInvalido />
    }

    return (
        <div className="mx-auto max-w-6xl p-6">

            {/* <!-- Botón volver --> */}
            <div className="mb-6">
                <Link
                    to="/"
                    className="flex w-24 items-start gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-600 transition hover:bg-slate-100">
                    ← Volver
                </Link>
            </div>

           {/*  <!-- Card principal --> */}

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

                {/* <!-- Header --> */}

                <div className="flex flex-col justify-between gap-6 border-b border-slate-200 p-8 lg:flex-row lg:items-center">

                    <div className="flex items-center gap-6">

                        <div
                            className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-700">

                            L

                        </div>

                        <div>

                            <h1 className="text-3xl font-bold text-slate-800">
                                Leanne Graham
                            </h1>

                            <p className="mt-1 text-slate-500">
                                @Bret
                            </p>

                            <p className="mt-2 text-slate-600">
                                Sincere@april.biz
                            </p>

                        </div>

                    </div>

                    <div className="flex gap-3">

                        <button
                            className="rounded-lg bg-amber-500 px-5 py-3 font-medium text-white transition hover:bg-amber-600">

                            Editar

                        </button>

                        <button
                            className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700">

                            Eliminar

                        </button>

                    </div>

                </div>

                {/* <!-- Contenido --> */}

                <div className="grid gap-8 p-8 lg:grid-cols-2">

                    {/* <!-- Información Personal --> */}

                    <div className="rounded-xl border border-slate-200">

                        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">

                            <h2 className="font-semibold text-slate-700">
                                Información Personal
                            </h2>

                        </div>

                        <div className="space-y-5 p-6">

                            <div>
                                <p className="text-sm text-slate-500">Nombre</p>
                                <p className="font-medium text-slate-800">
                                    Leanne Graham
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Usuario</p>
                                <p className="font-medium text-slate-800">
                                    Bret
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Email</p>
                                <p className="font-medium text-slate-800">
                                    Sincere@april.biz
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Teléfono</p>
                                <p className="font-medium text-slate-800">
                                    1-770-736-8031 x56442
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Sitio Web</p>
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 hover:underline">

                                    hildegard.org

                                </a>
                            </div>

                        </div>

                    </div>

                    {/* <!-- Dirección --> */}

                    <div className="rounded-xl border border-slate-200">

                        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">

                            <h2 className="font-semibold text-slate-700">
                                Dirección
                            </h2>

                        </div>

                        <div className="space-y-5 p-6">

                            <div>
                                <p className="text-sm text-slate-500">Calle</p>
                                <p className="font-medium text-slate-800">
                                    Kulas Light
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Suite</p>
                                <p className="font-medium text-slate-800">
                                    Apt. 556
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Ciudad</p>
                                <p className="font-medium text-slate-800">
                                    Gwenborough
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">Código Postal</p>
                                <p className="font-medium text-slate-800">
                                    92998-3874
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Latitud
                                    </p>

                                    <p className="font-medium text-slate-800">
                                        -37.3159
                                    </p>

                                </div>

                                <div>

                                    <p className="text-sm text-slate-500">
                                        Longitud
                                    </p>

                                    <p className="font-medium text-slate-800">
                                        81.1496
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* <!-- Empresa --> */}

                    <div className="rounded-xl border border-slate-200 lg:col-span-2">

                        <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">

                            <h2 className="font-semibold text-slate-700">
                                Empresa
                            </h2>

                        </div>

                        <div className="grid gap-6 p-6 md:grid-cols-3">

                            <div>

                                <p className="text-sm text-slate-500">
                                    Nombre
                                </p>

                                <p className="font-medium text-slate-800">
                                    Romaguera-Crona
                                </p>

                            </div>

                            <div>

                                <p className="text-sm text-slate-500">
                                    Catch Phrase
                                </p>

                                <p className="font-medium text-slate-800">
                                    Multi-layered client-server neural-net
                                </p>

                            </div>

                            <div>

                                <p className="text-sm text-slate-500">
                                    Business
                                </p>

                                <p className="font-medium text-slate-800">
                                    harness real-time e-markets
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default UsuarioDetalle