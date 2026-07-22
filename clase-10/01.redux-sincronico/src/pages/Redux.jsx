import { useDispatch, useSelector } from "react-redux"
import { decrementar, incrementar, incrementarPorValor } from "../store/slices/contador"

const Redux = () => {

  
 /*  const { contador } = useSelector(store => {
    //console.log(store.contador)
    return store.contador
  }) */
 //console.log(contador)
 // ! useSelector -> Me permite seleccionar dentro del store el estado que necesito
  const { contador } = useSelector(store => store.contador)

  // ! useDispatch -> Me permite hacer el dispatch de las acciones (disparar las acciones)
  const dispatch = useDispatch()

  const handleIncrementar = () => {
    dispatch(incrementar()) // ejecuto acción incrementar (No es un callback, le coloco los parentesis a la acción)
  }  

  const handleDecrementar = () => {
    dispatch(decrementar())
  }  

  const handleIncrementarPorValor = () => {
    dispatch(incrementarPorValor(22))
  }  
  
  return (
    <>
      <h1 className="text-5xl">Redux</h1>
      <hr />

      <h2 className="text-2xl">Contador: {contador}</h2>

      <button 
        onClick={handleIncrementar} 
        className="bg-green-500 hover:bg-green-700 p-3 px-4 rounded cursor-pointer me-2 text-white">
          Incrementar
      </button>
      <button 
        onClick={handleDecrementar} 
        className="bg-yellow-500 hover:bg-yellow-700 p-3 px-4 rounded cursor-pointer me-2 text-white">
          Decrementar
      </button>
      <button 
        onClick={handleIncrementarPorValor} 
        className="bg-red-500 hover:bg-red-700 p-3 px-4 rounded cursor-pointer text-white">
          IncrementarPorValor
      </button>
    </>
  )
}

export default Redux