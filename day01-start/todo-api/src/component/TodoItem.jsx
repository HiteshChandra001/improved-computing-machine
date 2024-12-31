import React from 'react'

const TodoItem = ({id,title,status,handleUpdate,handleDelete}) => {
  return (
    <li key={id} >
        {title}-{status?"completed":"incomplete"} <button onClick={()=>handleUpdate(id,status)}>toogle</button>   <button onClick={()=>handleDelete(id)}>delete</button>
    </li>
  )
}

export default TodoItem