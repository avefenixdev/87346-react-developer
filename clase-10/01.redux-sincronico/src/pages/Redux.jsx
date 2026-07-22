
const Redux = () => {

  const handleIncrementar = () => {
    
  }  
  const handledecrementar = () => {
    
  }  
  const handleIncrementarPorValor = () => {
    
  }  
  
  return (
    <>
      <h1 className="text-5xl">Redux</h1>
      <hr />

      <h2 className="text-2xl">Contador: contador</h2>

      <button 
        onClick={handleIncrementar} 
        className="bg-green-500 hover:bg-green-700 p-3 px-4 rounded cursor-pointer me-2 text-white">Incrementar</button>
      <button 
        onClick={handledecrementar} 
        className="bg-yellow-500 hover:bg-yellow-700 p-3 px-4 rounded cursor-pointer me-2 text-white">Decrementar</button>
      <button 
        onClick={handleIncrementarPorValor} 
        className="bg-red-500 hover:bg-red-700 p-3 px-4 rounded cursor-pointer text-white">IncrementarPorValor</button>
    </>
  )
}

export default Redux