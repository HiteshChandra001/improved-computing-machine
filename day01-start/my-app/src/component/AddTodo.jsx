import React, { useState } from 'react'

const AddTodo = ({handleAdd}) => {
    const[text,setText]=useState('');
    const handleChange=(e)=>{
        setText(e.target.value);
    }

    const onClick=()=>{
        handleAdd(text);
        setText('');
    }


  return (
    <div>
        <input type='text' value={text} onChange={handleChange}/>
        <button onClick={onClick}>Add</button>
    </div>
  )
}

export default AddTodo