import { useState } from "react"

// rafce
const Contador = () => {

    // * Un estado es una variable de js que está conectada al motor de javascript.
    // * A partir de la versión 16.8 de react aparecieron los hooks (ganchos) que permite de una manera sencilla agregar un estado a las funciones de js. Enganchar la función al core de React.
    // * Ganchos -> builtin (están dentro de la librería de react)
    // * useState es una función 
    // * retorna un array de 2 posiciones
    // * recibe un solo argumento para inicializar la variable conectada a react.
    // * En la posición 0 -> tengo el estado. la variable conectada a react.
    // * En la posición 1 -> tengo la función que modifica el estado.
    
    //console.log(useState(22)[0]) // el estado
    //console.log(useState(22)[1]) // la función que modifica el estado
    // desestructuración
    //const arrayDosPosiciones = useState(22)
    //console.log(arrayDosPosiciones)
    //        0           1
    const [contador, setContador] = useState(22)
    //console.log(contador) // arrayDosPosicion[0]
    //console.log(setContador) // arrayDosPosicion[1]

    const handleIncrementar = () => {
        // acá va el incremento
        console.log('handleIncrementar')
    }
    // A los eventos de react por ejemplo el onClick -> le paso un callback
    //                  evento, callback
    // addEventListener('click', () => {})
    // onClick={callback}

  return (
    <>
        <h2 className="text-4xl">
            Contador: 
            <strong className="text-6xl text-red-700">
                {contador}
            </strong>
        </h2>
        <button 
            onClick={handleIncrementar} 
            className="bg-blue-500 hover:bg-blue-600 rounded px-4 py-2 cursor-pointer me-2">
                Incrementar
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 rounded px-4 py-2 cursor-pointer me-2">Decrementar</button>
        <button className="bg-red-500 hover:bg-red-600 rounded px-4 py-2 cursor-pointer">Reiniciar</button>
    </>
  )
}

export default Contador