import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const getTodos = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      data:data.data,
      prev:data.prev,
      next:data.next
    }
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

const addTodoApi = async (url,newTodo) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });

    return response;
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error;
  }
};

const updateTodoApi=async (url,id,stat)=>{
  try{
    const res = await fetch(`${url}/${id}`,{
      method:'PATCH',
      headers:{ 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({status:!stat}),
    })
  }catch(error ){
    console.error('Error adding todo:', error);
    throw error;
  }
}
const deleteTodo=async (url,id)=>{
  try{
    const res = await fetch(`${url}/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json',
      }
    });
  }catch(error){
    console.error('Error adding todo:', error);
    throw error;
  }

}

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [prev,setPrev]=useState(null);
  const [next,setNext]=useState(null);

  const apiurl = "http://localhost:8000/todos";


  const getAllTodos = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await getTodos(`${apiurl}?_page=${page}`);
      setTodos(res.data);
      setPrev(res.prev)
      setNext(res.next)
    } catch (error) {
      setError('Failed to fetch todos.');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getAllTodos();
  }, [page])


  const handleAdd = async (task) => {
    const newItem = {
      id: 'id-' + crypto.randomUUID(),
      title: task,
      status: false,
    };

    try {
      const addedTodo = await addTodoApi(apiurl,newItem);

      await getAllTodos(`${apiurl}?_page=${page}`);
    } catch (error) {
      setError('Failed to add todo.');
    }
  };

  const handleDelete = async (id) => {
    try{
      await deleteTodo(apiurl,id);
      await getAllTodos();
    }catch(error){
      setError('Failed to update todo.');
    }
  }

  const handleUpdate = async (id,stat) => {
    try{
      await updateTodoApi(apiurl,id,stat)
      await getAllTodos();
    }catch (error) {
      setError('Failed to update todo.');
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;


  return (
    <div>
      <AddTodo handleAdd={handleAdd} />
      <button disabled={prev==null} onClick={() => setPage(p => p - 1)}>-</button>{page} <button disabled={next==null} onClick={() => setPage(p => p + 1)}>+</button>
      <TodoList todos={todos} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </div>
  )
}

export default TodoApp