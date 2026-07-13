import useContador from "../hooks/useContador"

const ContadorCustomHook = ({ valorInicial = 343 }) => {
    //        0           1               2               3
    const [counter, handleIncrement, handleDecrement, handleRestart] = useContador(valorInicial)
    //const { handleIncremento, contador, handleDecremento, handleReinicio} = useContador(valorInicial)

    return (
        <>
            <h3 className="text-emerald-600 text-2xl">Contador: {counter}</h3>
            <button className="bg-emerald-500 hover:bg-emerald-700 cursor-pointer rounded px-4 py-2 me-2" onClick={handleIncrement}>Incremento</button>
            <button className="bg-amber-500 hover:bg-amber-700 cursor-pointer rounded px-4 py-2 me-2" onClick={handleDecrement}>Decremento</button>
            <button className="bg-red-500 hover:bg-red-700 cursor-pointer rounded px-4 py-2" onClick={handleRestart}>Reinicio</button>
        </>
  )
}

export default ContadorCustomHook