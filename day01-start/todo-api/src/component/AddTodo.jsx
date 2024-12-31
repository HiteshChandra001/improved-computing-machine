import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { AddBox } from '@mui/icons-material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTodo = ({ handleAdd }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      toast.success('Task added successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      handleAdd(task.trim());
      
    } else {
      toast.error('Task cannot be blank!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
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
        <AddBox fontSize="large" />
      </IconButton>
      <ToastContainer />
    </div>
  );
};

export default AddTodo;
