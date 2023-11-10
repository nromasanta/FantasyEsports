//import logo from './logo.svg';
import React, { useState } from 'react';
import './League.css';
import LeagueList from '../components/LeagueList';


function League() {

  const [leagues, setLeagues] = useState([
    { title: "League 1", id: 1 },
    { title: "League 2", id: 2 },
    { title: "League 3", id: 3 },

  ]); // Sample league names

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
      {/*
      {leagues.map((leagues) => (
        <div key={leagues.id} className="league-item">
          <span className="league-name">
          {leagues.title}
          </span>
          <button className="edit-league"> 
          View
          </button>
        </div>
      ))} */}

    </main>
  </div>

  );
}

export default League;