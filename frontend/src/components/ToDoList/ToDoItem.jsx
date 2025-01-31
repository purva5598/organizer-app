import React from 'react';
import './ToDoList.css';

const ToDoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default ToDoItem;