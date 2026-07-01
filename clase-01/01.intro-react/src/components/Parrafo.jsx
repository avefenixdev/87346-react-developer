//rafce

const Parrafo = (props) => { // props = {data, color}
    //console.log(props)
    // Desestructuración
  const { data, color } = props
  //console.log(data)
  //console.log(color)

    const estilo = {
        color
    }

  return (
    <p style={estilo}>{data}</p>
  )
}

export default Parrafo