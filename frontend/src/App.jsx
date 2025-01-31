import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const username = 'Purva'; // Replace with dynamic username later
  return (
    <div>
      <Dashboard username={username} />
    </div>
  );
}

export default App;