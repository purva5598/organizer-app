import React, { useState } from 'react';
import axios from 'axios';
import ToDoItem from './ToDoItem';
import './ToDoList.css';

const ToDoList = ({ tasks, addTask, toggleTask, isGuest }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      if (isGuest) {
        // Add task locally for guest
        addTask({ text: newTask });
        setNewTask('');
      } else {
        // Add task in the backend for authenticated users
        const addTaskBackend = async () => {
          try {
            const res = await axios.post(
              'https://organizer-app-ru2o.onrender.com/api/tasks',
              { text: newTask },
              { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            addTask(res.data);
            setNewTask('');
          } catch (err) {
            console.error(err);
          }
        };
        addTaskBackend();
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
          <ToDoItem key={task.id || task._id} task={task} toggleTask={toggleTask} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;