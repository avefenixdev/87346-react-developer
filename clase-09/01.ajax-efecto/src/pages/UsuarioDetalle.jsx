
const UsuarioDetalle = () => {
    return (
        <div class="mx-auto max-w-6xl p-6">

            {/* <!-- Botón volver --> */}
            <div class="mb-6">
                <button
                    class="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-600 transition hover:bg-slate-100">

                    ← Volver

                </button>
            </div>

           {/*  <!-- Card principal --> */}

            <div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

                {/* <!-- Header --> */}

                <div class="flex flex-col justify-between gap-6 border-b border-slate-200 p-8 lg:flex-row lg:items-center">

                    <div class="flex items-center gap-6">

                        <div
                            class="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-700">

                            L

                        </div>

                        <div>

                            <h1 class="text-3xl font-bold text-slate-800">
                                Leanne Graham
                            </h1>

                            <p class="mt-1 text-slate-500">
                                @Bret
                            </p>

                            <p class="mt-2 text-slate-600">
                                Sincere@april.biz
                            </p>

                        </div>

                    </div>

                    <div class="flex gap-3">

                        <button
                            class="rounded-lg bg-amber-500 px-5 py-3 font-medium text-white transition hover:bg-amber-600">

                            Editar

                        </button>

                        <button
                            class="rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700">

                            Eliminar

                        </button>

                    </div>

                </div>

                {/* <!-- Contenido --> */}

                <div class="grid gap-8 p-8 lg:grid-cols-2">

                    {/* <!-- Información Personal --> */}

                    <div class="rounded-xl border border-slate-200">

                        <div class="border-b border-slate-200 bg-slate-50 px-6 py-4">

                            <h2 class="font-semibold text-slate-700">
                                Información Personal
                            </h2>

                        </div>

                        <div class="space-y-5 p-6">

                            <div>
                                <p class="text-sm text-slate-500">Nombre</p>
                                <p class="font-medium text-slate-800">
                                    Leanne Graham
                                </p>
                            </div>

                            <div>
                                <p class="text-sm text-slate-500">Usuario</p>
                                <p class="font-medium text-slate-800">
                                    Bret
                                </p>
                            </div>

                            <div>
                                <p class="text-sm text-slate-500">Email</p>
                                <p class="font-medium text-slate-800">
                                    Sincere@april.biz
                                </p>
                            </div>

                            <div>
                                <p class="text-sm text-slate-500">Teléfono</p>
                                <p class="font-medium text-slate-800">
                                    1-770-736-8031 x56442
                                </p>
                            </div>

                            <div>
                                <p class="text-sm text-slate-500">Sitio Web</p>
                                <a
                                    href="#"
                                    class="font-medium text-blue-600 hover:underline">

                                    hildegard.org

                                </a>
                            </div>

                        </div>

                    </div>

                    {/* <!-- Dirección --> */}

                    <div class="rounded-xl border border-slate-200">

                        <div class="border-b border-slate-200 bg-slate-50 px-6 py-4">

                            <h2 class="font-semibold text-slate-700">
                                Dirección
                            </h2>

                        </div>

                        <div class="space-y-5 p-6">

                            <div>
                                <p class="text-sm text-slate-500">Calle</p>
                                <p class="font-medium text-slate-800">
                                    Kulas Light
                                </p>
                            </div>

                            <div>
                                <p class="text-sm text-slate-500">Suite</p>
                                <p class="font-medium text-slate-800">
                                    Apt. 556
                                </p>
                            </div>

                            <div>
                                <p class="text-sm text-slate-500">Ciudad</p>
                                <p class="font-medium text-slate-800">
                                    Gwenborough
                                </p>
                            </div>

                            <div>
                                <p class="text-sm text-slate-500">Código Postal</p>
                                <p class="font-medium text-slate-800">
                                    92998-3874
                                </p>
                            </div>

                            <div class="grid grid-cols-2 gap-6">

                                <div>
                                    <p class="text-sm text-slate-500">
                                        Latitud
                                    </p>

                                    <p class="font-medium text-slate-800">
                                        -37.3159
                                    </p>

                                </div>

                                <div>

                                    <p class="text-sm text-slate-500">
                                        Longitud
                                    </p>

                                    <p class="font-medium text-slate-800">
                                        81.1496
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* <!-- Empresa --> */}

                    <div class="rounded-xl border border-slate-200 lg:col-span-2">

                        <div class="border-b border-slate-200 bg-slate-50 px-6 py-4">

                            <h2 class="font-semibold text-slate-700">
                                Empresa
                            </h2>

                        </div>

                        <div class="grid gap-6 p-6 md:grid-cols-3">

                            <div>

                                <p class="text-sm text-slate-500">
                                    Nombre
                                </p>

                                <p class="font-medium text-slate-800">
                                    Romaguera-Crona
                                </p>

                            </div>

                            <div>

                                <p class="text-sm text-slate-500">
                                    Catch Phrase
                                </p>

                                <p class="font-medium text-slate-800">
                                    Multi-layered client-server neural-net
                                </p>

                            </div>

                            <div>

                                <p class="text-sm text-slate-500">
                                    Business
                                </p>

                                <p class="font-medium text-slate-800">
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