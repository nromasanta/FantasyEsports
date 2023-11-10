//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import MemberList from '../components/MemberList';
import './admin.css';

// This page is a league comissioner's dashboard
// Here they can kick members from their league,
// going to need invite functionality later

// IF ERROR:
// Create a second terminal and run this alongside 
// another terminal running `npm start`
// 
// Using a temporary json server to store mock data until
// we get MongoDB up and running

// npx json-server --watch ../backend/db.json --port 8000


function Admin() {
 

  const [members, setMembers] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect( () => {
    fetch('http://localhost:8000/members')
    .then(res => { 
      if(!res.ok) {
        throw Error('Failed to retrieve data');
      }
      return res.json();
    })
    .then (data => {
      setMembers(data);
      setIsPending(false);
      setError(null);
    })
    .catch(err => {
      setIsPending(false);
      setError(err.message);
    })
  }, []);



  return (

    <div className="app-container">
    <aside className="sidebar-admin">
      <div className="site-icon"> (Placeholder) </div>
      <div className="admin-username">(Placeholder)</div>
      <div className="statistics"> (Placeholder) </div>
      <div className="user-reports"> (Placeholder) </div>
    </aside>
    <main className="main-content">
      { error && <div> { error } </div>}
      { isPending && <div>Loading Data...</div>}
      { members && <MemberList members = {members} />}
    </main>
  </div>

  );
}

export default Admin;