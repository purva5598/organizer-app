import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  return (
    <Routes>
      <Route
        path="/"
        element={token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/signup" element={<Signup setToken={setToken} />} />
      <Route
        path="/dashboard"
        element={token ? <Dashboard token={token} setToken={setToken} /> : <Navigate to="/login" />}
      />
      <Route
        path="/guest"
        element={<Dashboard isGuest={true} setToken={setToken} />}
      />
    </Routes>
  );
};

export default App;