//import logo from './logo.svg';
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import MemberList from '../components/MemberList';
import './admin.css';

// This page is a league comissioner's dashboard
// Here they can kick members from their league,
// going to need invite functionality later



function Admin() {
 
  const [members, setMembers] = useState([
    { title: "Member 1", id: 1 },
    { title: "Member 2", id: 2 },
    { title: "Member 3", id: 3 },

  ]); 




  return (

    <div className="app-container">
    <aside className="sidebar-admin">
      <div className="site-icon"> (Placeholder) </div>
      <div className="admin-username">(Placeholder)</div>
      <div className="statistics"> (Placeholder) </div>
      <div className="user-reports"> (Placeholder) </div>
    </aside>
    <main className="main-content">
      <MemberList members = {members} />
    </main>
  </div>

  );
}

export default Admin;