// Un componente en REACT -> es una Función
// Un componente por archivo (un componente por módulo)
import './App.css'
import Contenedor from './components/Contenedor'
import Imagen from './components/Imagen'
import Parrafo from './components/Parrafo'
import TituloPrincipal from './components/TituloPrincipal'

const App = () => {
  return (
    <Contenedor>
      <h1>Hola mundo desde react</h1>

      <TituloPrincipal 
        texto="Título número 1" 
        color="blue" 
      />
      
      <Parrafo 
        data="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur provident quam obcaecati quibusdam! Quibusdam neque sint, vero inventore quidem quos." 
        color="darkblue"
      />

      <Imagen url="/imgs/avion-01.webp" textoAlternativo="Este es un avión" />

      <TituloPrincipal 
        texto="Título número 2" 
        color="green" 
      />
      <Parrafo 
        data="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, hic." 
        color="darkorange"
      />

      <Imagen url="/imgs/avion-02.webp" textoAlternativo="Este es otro avión"  />

      <TituloPrincipal 
        texto="Título número 3" 
        color="red" 
      />
      
      <Parrafo 
        data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque nihil eum officiis quam maxime!"  
        color="darkkhaki"
      />

      <Imagen url="/imgs/avion-03.webp" textoAlternativo="El último avión"  />
    </Contenedor>
  )
}

export default App