import React from 'react'
import { Shaxar } from '../../dataa/Shaxar'
import { useState } from 'react'

export default function OurTours() {
  const [readmore, setReadMore]=useState(false)
  return (
    <div className='ass'>
      <h1 className='katta_text'>Our Tours</h1>
    <div className='katta'>

{Shaxar?.map((el)=>{
  return<div className='shaxar'>
    <img src={el.img} alt="" />
    <h3>{el.name}</h3>
    <p>{readmore ? el.text  : el.text.slice(0 , 50)}<button className='more' onClick={()=> setReadMore(true)}>more text</button><button className='less' onClick={()=> setReadMore(false)}>less text</button></p>

  </div>
})}
</div>
    </div>
  )
}
