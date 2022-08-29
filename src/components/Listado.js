import React from 'react'
import data from './data.json'
import Item from './Item'


export default function Listado({contador}) {
  return (
    <div className='container'>
      {
      data.map(item => <Item key={item.id} props={item} contador={contador}/>)
      }
    </div>
  )
}
