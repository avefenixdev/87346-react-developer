import { useEffect } from "react"


const useTitulo = (tituloPagina) => {
  
    useEffect(() => {
        document.title = `Educación IT - ${tituloPagina}`
    }, [tituloPagina])

}

export default useTitulo