import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleUpdate, handleDelete }) => {
  return (
    <ol className="list-decimal pl-4 space-y-2">
      {todos.map((e) => (
        <TodoItem
          key={e.id}
          {...e}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </ol>
  );
};

export default TodoList;
