import Cabecera from './components/Cabecera'
import Listado from './components/Listado'
import React, { useState } from 'react'

function App() {

  const [sumaTotal, setSumaTotal] = useState(0)

  const sumaProductos = () => {
    setSumaTotal(sumaTotal + 1)
	}

  return (
    <div className="App">
      <Cabecera sumaTotal={sumaTotal}/>
      <Listado contador={sumaProductos}/>
    </div>
  );
}

export default App;
