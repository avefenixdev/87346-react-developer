// rafce

const Contenedor = (props) => {

  return (
    <main className="container mx-auto">
        {props.children}
        <label htmlFor=""></label>
    </main>
  )
}

export default Contenedor