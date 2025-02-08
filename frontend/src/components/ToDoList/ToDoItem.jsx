import React from 'react';
import './ToDoList.css';

const ToDoItem = ({ task, toggleTask }) => {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task._id)}
      />
      <span>{task.text}</span>
    </li>
  );
};

export default ToDoItem;