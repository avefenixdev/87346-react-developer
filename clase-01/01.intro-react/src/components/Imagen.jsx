//rafce

const Imagen = ({url, textoAlternativo}) => {

    //console.log(url)
    //console.log(textoAlternativo)

  return (
    <img src={url} alt={textoAlternativo} />
  )
}

export default Imagen