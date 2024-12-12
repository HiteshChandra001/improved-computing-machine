import React, { useState } from 'react'
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const Todo = () => {
    const [todos,setTodos]=useState([]);
    
    const handleAddBtn=(text)=>{
        const newItem={
            title:text,
            status:false,
            id:Date.now()+""+Math.random()
        }

        const newArr=[...todos,newItem];
        setTodos(newArr);
    }
  return (
    <div>
        <AddTodo handleTodos={handleAddBtn}  />
        <ul>
            {todos.map(todo=>
                <TodoItem key={todo.id} {...todo}  />
            )}
        </ul>

    </div>
  )
}

export default Todo