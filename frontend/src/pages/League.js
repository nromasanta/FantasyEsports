//import logo from './logo.svg';
import React, { useState } from 'react';
import './League.css';
import LeagueList from '../components/LeagueList';

// Page displaying all the active leagues on the application


function League() {

  const [leagues, setLeagues] = useState([
    { title: "League 1", id: 1 },
    { title: "League 2", id: 2 },
    { title: "League 3", id: 3 },

  ]); 

  return (

    <div className="app-container">
    <aside className="sidebar-admin">
      <div className="site-icon">(Placeholder)</div>
      <div className="admin-username">(Placeholder))</div>
      <div className="statistics">(Placeholder)</div>
      <div className="user-reports">(Placeholder)</div>
    </aside>
    <main className="main-content">

      <LeagueList leagues = {leagues}/>

    </main>
  </div>

  );
}

export default League;