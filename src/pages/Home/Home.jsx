import React, { useState } from 'react'
import { Menu } from '../../dataa/Menu'

// const handleDelete = (id) => {
//   const filtered  = els.filter((el)=>{
//     return el.id !== id
//   })
//   Menu(filtered)
// }


export default function Home() {
  const [delete1, setDelete1]=useState(true)
  return (
    <div className='ass'>
      <h1 className='katta_text'>Our Menu</h1>
    <div className='katta'>

{Menu?.map((el)=>{
  return<div className='menu'>
    <img src={el.img} alt="" />
    <h3>{delete1 ?  el.name : el.name.slice(0 , 0)}</h3>
    <p>{delete1 ?  el.text : el.text.slice(0 , 0)}</p>
    <button className='delete' onClick={()=> setDelete1(false)}>Delete</button>
  </div>
})}
</div>
    </div>
  )
}
