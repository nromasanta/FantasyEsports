import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const leagues = ['League 1', 'League 2', 'League 3', 'League 4']; // Sample league names


  return (

    <div className="app-container">
    <aside className="sidebar">
      <div className="site-icon"></div>
      <div className="admin-username"></div>
      <div className="statistics"></div>
      <div className="user-reports"></div>
    </aside>
    <main className="main-content">
      {leagues.map((league, index) => (
        <div key={index} className="league-item">
          <span className="league-name"></span>
          <button className="edit-league"></button>
        </div>
      ))}
    </main>
  </div>

  );
}

export default App;
