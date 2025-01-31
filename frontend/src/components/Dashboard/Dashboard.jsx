import React, { useState } from 'react';
import ToDoList from '../ToDoList/ToDoList';
import Calendar from '../Calendar/Calendar';
import PieChart from '../PieChart/Piechart';
import EventTracker from '../EventTracker/EventTracker';
import './Dashboard.css';

const Dashboard = ({ username }) => {
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">{username}'s Board</h1>
      <div className="dashboard-content">
        <div className="todo-section">
          <ToDoList
            tasks={tasks}
            addTask={addTask}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </div>
        <div className="calendar-section">
          <Calendar events={events} onEventAdd={addEvent} />
        </div>
      </div>
      <div className="progress-section">
        <PieChart completedTasks={completedTasks} totalTasks={totalTasks} />
      </div>
      <div className="event-section">
        <EventTracker addEvent={addEvent} />
      </div>
    </div>
  );
};

export default Dashboard;