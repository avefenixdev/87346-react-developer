import { useState } from "react"

const Contador = ({ valorInicial = 22 }) => {

    const [contador, setContador] = useState(valorInicial)

    const handleIncremento = () => {
        //contador++
        setContador(contador + 1)
    }

    const handleDecremento = () => {
        setContador(contador - 1)
    }

    const handleReinicio = () => {
        setContador(valorInicial)
    }

    return (
        <>
            <h1 className="text-emerald-600">Contador: {contador}</h1>
            <hr />
            <button className="bg-red-500 hover:bg-red-700 cursor-pointer rounded px-4 py-2" onClick={handleIncremento}>Incremento</button>
            <button className="bg-red-500 hover:bg-red-700 cursor-pointer rounded px-4 py-2" onClick={handleDecremento}>Decremento</button>
            <button className="bg-red-500 hover:bg-red-700 cursor-pointer rounded px-4 py-2" onClick={handleReinicio}>Reinicio</button>
        </>
  )
}

export default Contador