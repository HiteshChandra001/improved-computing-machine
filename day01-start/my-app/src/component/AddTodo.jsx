import React, { useState } from 'react'

const AddTodo = ({handleTodos}) => {
    const [text,setText]=useState('');

    const handleTextChange=(e)=>{
        setText(e.target.value);
    }

    const handleAddBtn=()=>{
        handleTodos(text);
        setText('');
    }

return (
    <div>
        <input type='text' value={text} onChange={handleTextChange} />
        <button onClick={handleAddBtn}>Add</button>
    </div>
  )
}

export default AddTodo