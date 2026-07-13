// rafce

import { useEffect, useState } from "react"

const EfectoSecundario = () => {

  // https://react.dev/reference/react/hooks
  // https://react.dev/reference/react/useEffect

  // ! Efecto Secundario (useEffect) 
  // ? Es un gancho (hook) como el useState pero permite en este caso, estar atento (pendiente) de cambio que se produzca en un estado, props o en el ciclo de vida del componente. En el ciclo de vida del componente podría ejecutar código.

  // ! Ciclo de vida de un componente de REACT

  // * 1. Montaje -> Nace o se monta en la interfaz el componente -> Aparece en pantalla
  // * 2. Actualización -> Se actualiza... (Props, o estado)
  // * 3. Desmonaje -> El componente muere. Se destruye -> Desaparece de la pantalla.

  // ! Arquitectura del useEffect (recibe 2 argumentos)
  // * Es una función que recibe 2 argumentos.

  // useEffect(callback, [array-referencias])
  // 1. 1er argumento es una función. Un callback (una función pasada como argumento del useEffect)
  // 2. 2do argumento es un array de referencias. funciones, estados, props.

  // ! NOTA IMPORTANTE: Es que el array de referencias tiene que estar presente, no puede no estar.
  // ! useEffect(callback, []) // <------ el array aunque vacío tiene que estar.

  // useEffect(callback, [])
  // addEventLister('click', callback)

  // ! 1. Montaje
  //          callback, ref
  //useEffect(() => {}, [])
  //useEffect(() => {}, [])
  useEffect(() => {
    console.log('Componente apareció en pantalla!')
    console.log('Cuando el array de referncias está vacío se ejecuta el callback cuando el componente se monta (aparece en pantalla)')
    // -----------------
    document.title = 'Educación IT - Efecto Secundario!'
  }, [])

  // ! 3. Desmontaje
  useEffect(() => {
    // Lo que quiero que se ejecute cuando el componente se desmonte va en el return del callback
    return () => {
      console.log('Componente desaparecio de la pantalla')
      console.log('Se ejecuta esta función cuando el componente se destruye!')
    }

  }, [])

  // ! 2. Actualización
  // Lo estados van siempre antes de los efectos
  const [contador, setContador] = useState(999)
  const [contadorDos, setContadorDos] = useState(444)
  
  const handleIncrementar = () => {
    setContador(contador + 1)
  }

  useEffect(() => {
    console.log('El estado contador, cambió!')
  }, [contador])
 
  useEffect(() => {
    console.log('El estado contador 2, cambió')
  }, [contadorDos])

  const handleIncrementarDos = () => {
    setContadorDos(contadorDos + 2)
  }

  useEffect(() => {
    console.warn('Cambiaron ambos contador')
  }, [contador, contadorDos])

  /* Es una lógica que cuando el componenete se muestre, aranque un proceso y cuando componente se desmonte o desaparezca */
  useEffect(() => {
    // se ejecuta cuando el componente se monta
    const refIntervalo = setInterval(() => {
      console.log(new Date().toLocaleString())
    }, 1000)

    // Se ejecuta cuando el compoente va a desaparecer (destruir) de la pantalla
    // En el callback del return coloco todo lo que quiera que se ejecute cuando el componente se desmote (desaparezca de pantalla)
    return () => {
      clearInterval(refIntervalo)
    }

  }, [])

  return (
    <>
      <h1>Efecto secundario</h1>
      <hr />
      <h2>Contador (Ciclo de vida - Actualización)</h2>
      <p>Contador : {contador}</p>
      <button onClick={handleIncrementar} className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 cursor-pointer">Incrementar</button>

      <h2>Contador 2</h2>
      <p>Contador: {contadorDos}</p>
      <button onClick={handleIncrementarDos} className="bg-amber-500 hover:bg-amber-700 text-white px-4 py-2 cursor-pointer">Incrementar 2</button>
    </>
  )
}

export default EfectoSecundario