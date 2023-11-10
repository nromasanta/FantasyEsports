//import logo from './logo.svg';
//import React, { useState } from 'react';
import './League.css';
import LeagueList from '../components/LeagueList';
import useFetch from '../components/useFetch';

// Page displaying all the active leagues on the application


function League() {


  const {data : leagues, isPending, error } = useFetch('http://localhost:8000/leagues')

  return (

    <div className="app-container">
    <aside className="sidebar-admin">
      <div className="site-icon">(Placeholder)</div>
      <div className="admin-username">(Placeholder))</div>
      <div className="statistics">(Placeholder)</div>
      <div className="user-reports">(Placeholder)</div>
    </aside>
    <main className="main-content">
      { error && <div> { error } </div>}
      { isPending && <div> Loading Data...</div>}
      { leagues && <LeagueList leagues = {leagues} />}
    </main>
  </div>

  );
}

export default League;