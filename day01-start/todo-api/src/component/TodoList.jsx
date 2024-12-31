import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos,handleUpdate,handleDelete }) => {
  return (
    <ol>
      {todos.map(e => <TodoItem key={e.id} {...e} handleDelete={handleDelete} handleUpdate={handleUpdate} />)}
    </ol>
  )
}

export default TodoList