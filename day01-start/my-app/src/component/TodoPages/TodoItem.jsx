import React from 'react'

const TodoItem = ({id,title,status,handleToogle,handleDelete}) => {
  return (
    <li>{title}-{status?"completed":"pending"} <button onClick={()=>handleToogle(id)}>Toogle</button> <button onClick={()=>handleDelete(id)}>delete</button></li>
  )
}

export default TodoItem