import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

const ToDoList = ({ tasks, addTask, toggleTask, deleteTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask({ id: Date.now(), text: newTask, completed: false });
      setNewTask('');
    }
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;