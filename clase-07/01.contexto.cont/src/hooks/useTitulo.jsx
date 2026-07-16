import { useEffect } from "react"


const useTitulo = (titulo) => {

    useEffect(() => {
      document.title = `Educación IT - ${titulo}`
    }, [titulo])
    
}

export default useTitulo