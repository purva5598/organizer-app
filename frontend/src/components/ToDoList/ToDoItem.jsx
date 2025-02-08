import React from 'react';
import './ToDoList.css';

const ToDoItem = ({ task }) => {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
    </li>
  );
};

export default ToDoItem;