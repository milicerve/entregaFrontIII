import React, { useState } from 'react'

export default function Item({props, contador}) {

  const [numeroCompras, setNumeroCompras] = useState(props.stock)

  const actualizarStock = () => {
    numeroCompras > 0 && setNumeroCompras(numeroCompras - 1)
    contador()
	}


  return (
      <div className='producto'>      
        <h3>{props.producto.nombre}</h3>
        <p>{props.producto.descripcion}</p>
        <h5> En stock: {numeroCompras === 0 ? <span>agotado</span> : numeroCompras }</h5> 
        { numeroCompras > 0 ? <button onClick={actualizarStock}>Comprar</button> : <button disabled >SIN STOCK</button>}           
      </div>
  )
}
