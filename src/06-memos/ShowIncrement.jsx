import React from 'react'

export const ShowIncrement = ({increment}) => {
  console.log("M e volvi a dibujar :C")
  return (
    <button className='btn btn-primary'
    
    onClick={()=>{increment(5);}}>
        Incrementar
    </button>
  )
}
