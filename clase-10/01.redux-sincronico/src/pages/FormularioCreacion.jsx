
import { useState } from "react";
import { Link } from "react-router";

function FormularioCreacion() {

    const formuInicial = {
        id: null,
        name: '',
        username: '',
        phone: '',
        email: '',
        website: ''
    }

    const [formu, setForm] = useState(formuInicial)
    console.log(formu)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {

        const nuevoFormu = {
            ...formu,
            [e.target.name]: e.target.value
        }

        setForm(nuevoFormu)

    }

    return (
        <div className="mx-auto max-w-3xl p-6">

            {/* Botón volver */}
            <div className="mb-6">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-600 transition hover:bg-slate-100"
                >
                    ← Volver
                </Link>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

                {/* Header */}

                <div className="border-b border-slate-200 px-8 py-6">

                    <h1 className="text-2xl font-bold text-slate-800">
                        Nuevo Usuario
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Complete la información para registrar un nuevo usuario.
                    </p>

                </div>

                {/* Formulario */}

                <form onSubmit={handleSubmit} className="space-y-6 p-8">

                    <div>

                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Nombre <span className="text-red-500">*</span>
                        </label>

                        <input
                            onChange={handleChange}
                            value={formu.name}
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Ingrese el nombre completo"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                    </div>

                    <div>

                        <label
                            htmlFor="username"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Nombre de usuario <span className="text-red-500">*</span>
                        </label>

                        <input
                            onChange={handleChange}
                            value={formu.username}
                            name="username"
                            id="username"
                            type="text"
                            placeholder="Ingrese el nombre de usuario"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                    </div>

                    <div>

                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Email <span className="text-red-500">*</span>
                        </label>

                        <input
                            onChange={handleChange}
                            value={formu.email}
                            name="email"
                            id="email"
                            type="email"
                            placeholder="usuario@email.com"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                    </div>

                    <div>

                        <label
                            htmlFor="phone"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Teléfono
                        </label>

                        <input
                            onChange={handleChange}
                            value={formu.phone}
                            name="phone"
                            id="phone"
                            type="tel"
                            placeholder="+54 11 1234-5678"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                    </div>

                    <div>

                        <label
                            htmlFor="website"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Sitio Web
                        </label>

                        <input
                            onChange={handleChange}
                            value={formu.website}
                            name="website"
                            id="website"
                            type="url"
                            placeholder="https://www.ejemplo.com"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                    </div>

                    {/* Botones */}

                    <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">

                        <Link
                            to="/usuarios"
                            className="rounded-lg border border-slate-300 px-6 py-3 text-center font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                            Cancelar
                        </Link>

                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                        >
                            Crear Usuario
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default FormularioCreacion