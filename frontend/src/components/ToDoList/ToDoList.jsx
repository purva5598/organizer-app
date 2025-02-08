import React, { useState } from 'react';
import axios from 'axios';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

const ToDoList = ({ tasks, addTask, token, toggleTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = async () => {
    if (newTask.trim()) {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/tasks',
          { text: newTask },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        addTask(res.data);
        setNewTask('');
      } catch (err) {
        console.error(err);
      }
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
          <ToDoItem key={task._id} task={task} toggleTask={toggleTask} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;