import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ToDoList from '../ToDoList/ToDoList';
import Calendar from '../Calendar/Calendar';
import PieChart from '../PieChart/PieChart';
import EventTracker from '../EventTracker/EventTracker';
import './Dashboard.css';

const Dashboard = ({ token, isGuest, setToken }) => {
  const [tasks, setTasks] = useState([]);
  const [events, setEvents] = useState([]);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isGuest);
    if (!isGuest && token) {
      
      const fetchData = async () => {
        try {
          console.log(token);

          const tasksRes = await axios.get('http://localhost:5000/api/tasks', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setTasks(tasksRes.data);

          const eventsRes = await axios.get('http://localhost:5000/api/events', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setEvents(eventsRes.data);

          const userRes = await axios.get('http://localhost:5000/api/auth/user', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUsername(userRes.data.username);
          console.log(username);
          
        } catch (err) {
          console.error(err);
        }
      };

      fetchData();
    }
  }, [token, isGuest]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">{isGuest ? "Guest's Board" : `${username}'s Board`}</h1>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
      <div className="dashboard-content">
        <div className="todo-section">
          <ToDoList tasks={tasks} addTask={(task) => setTasks([...tasks, task])} token={token} />
        </div>
        <div className="calendar-section">
          <Calendar events={events} />
        </div>
      </div>
      <div className="progress-section">
        <PieChart tasks={tasks} />
      </div>
      <div className="event-section">
        <EventTracker events={events} addEvent={(event) => setEvents([...events, event])} token={token} />
      </div>
    </div>
  );
};

export default Dashboard;