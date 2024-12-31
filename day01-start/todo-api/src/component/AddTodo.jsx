import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';

const AddTodo = ({ handleAdd }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    handleAdd(task);
    setTask('');
  };

  return (
    <div className="p-4 flex items-center space-x-2">
      <TextField
        variant="outlined"
        label="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-grow"
      />
      <IconButton
        color="primary"
        onClick={handleAddTask}
        title="Add Todo"
      >
        <Add />
      </IconButton>
    </div>
  );
};

export default AddTodo;
