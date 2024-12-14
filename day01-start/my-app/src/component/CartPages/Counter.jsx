import React, { useState } from 'react'

const Counter = ({id,num,handleChange}) => {
    const [count,setCount]=useState(num);
    const handleMinus=()=>{
        if(count>0){setCount(count-1);
        handleChange(id,count-1);
        }
    }
    
    const handleAdd=()=>{
        setCount(count+1);
        handleChange(id,count+1);
    }
  return (
    <>
        <button onClick={handleMinus}>-</button>
        {count}
        <button onClick={handleAdd}>+</button>
        </>
  )
}

export default Counter