import React from 'react'

const Btn = ({v,handleClick}) => {
  return (
    <button onClick={()=>handleClick(v)}>{v}</button>
  )
}

export default Btn