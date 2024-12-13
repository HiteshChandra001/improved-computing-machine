import React, { useState } from 'react'
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const Todo = () => {
    const [todos,setTodos] = useState([]);

    const handleAdd=(text)=>{
        const newItem={
            title:text,status:false,id:Date.now()+''+Math.random()
        }
        const newArr=[...todos,newItem];
        setTodos(newArr);
    }

    const handleDelete=(id)=>{
        setTodos(todos.filter(e=>e.id!=id));
    }

    const handleToogle=(id)=>{
        const newArr=todos.map(e=>e.id===id?{ ...e, status:!e.status }:e);
        setTodos(newArr);
    }

  return (
    <div>
        <AddTodo handleAdd={handleAdd} />
        <ul>
            {todos.map(ele=><TodoItem key={ele.id} {...ele} handleDelete={handleDelete} handleToogle={handleToogle}/>)}
        </ul>
    </div>
  )
}

export default Todo