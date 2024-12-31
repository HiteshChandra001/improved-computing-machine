import React from 'react';
import { IconButton } from '@mui/material';
import { Delete, Edit, CheckCircleOutline, HighlightOff } from '@mui/icons-material';

const TodoItem = ({ id, title, status, handleUpdate, handleDelete }) => {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <span className={`flex-grow ${status ? 'line-through text-gray-500' : ''}`}>
        {title}
      </span>
        {/* Toggle Status Button */}
        <IconButton
          color="primary"
          onClick={() => handleUpdate(id, status)}
          title="Toggle Status"
        >  
            {status ?  <CheckCircleOutline />  : <HighlightOff />}
        </IconButton>

        {/* Delete Button */}
        <IconButton
          color="error"
          onClick={() => handleDelete(id)}
          title="Delete Todo"
        >
          <Delete />
        </IconButton>
    </li>
  );
};

export default TodoItem;
