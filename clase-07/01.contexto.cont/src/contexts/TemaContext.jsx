// En react un context sirve para compartir estado global sin pasar props
// No remplaza a las props, Redux, Zustand
// Es para un estado transversal y relativamente estable.
import { createContext, useState } from 'react'

// El tema (dark / light)
// Idioma
// Configuración Global
// Usuario autenticado.
// Carrito

// ! 1er paso - Creación del contexto 
const TemaContext = createContext()

// ! 2do paso - Armado del Provider (Va hacer global los estados o lo que quiera hacer global)
const TemaProvider = ( { children } ) => {

    const [color, setColor] = useState('text-indigo-500')

    const handleCambioTema = () => {
        setColor(color === 'text-red-500' ? 'text-indigo-500' : 'text-red-500')
    }
    
    // Todo lo que quiera compartir al exterior
    const data = {
        color,
        handleCambioTema
    }

    return <TemaContext.Provider value={data}>{ children }</TemaContext.Provider>
}
// ! 3er paso - Exportar el contexto y el provider
export { TemaProvider } // Export como una propiedad de un objeto
export default TemaContext // Funcionalidad principal de este módulo
