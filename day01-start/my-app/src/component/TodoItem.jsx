import React from 'react'

const TodoItem = ({title,status}) => {
  return (
    <li>{title}-{status?"complete":"incomplete"}</li>
  )
}

export default TodoItem