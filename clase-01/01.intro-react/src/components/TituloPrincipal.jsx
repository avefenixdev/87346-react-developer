// rafce

const TituloPrincipal = (props) => {
    

    
    // eslint-disable-next-line no-unused-vars
    const mostrarProps = () => {
        console.log(props) // {texto, color}
        console.log(props.texto)
        console.log(props.color)
    }

    //mostrarProps()



  return (
    <h2 style={{ color: props.color, textDecoration: 'underline' }}>{props.texto}</h2>
  )
}

export default TituloPrincipal