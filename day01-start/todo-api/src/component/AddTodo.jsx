import React, { useState } from 'react'

const AddTodo = ({handleAdd}) => {
    const [task,setTask]=useState("");

    const handleAddTask= ()=>{
         handleAdd(task);
        setTask("");
    }
  return (
    <div>
        <input type='text' value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleAddTask}>Add</button>
    </div>
  )
}

export default AddTodo