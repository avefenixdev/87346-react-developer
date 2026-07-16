import { useContext } from "react"
import TemaContext from "../contexts/TemaContext"

const useTema = () => {
    return useContext(TemaContext)
}

export default useTema