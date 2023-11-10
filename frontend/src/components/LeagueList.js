//import React, { useState } from 'react';

const LeagueList = (props) => {

    const leagues = props.leagues;
    
    return ( 
        <div className = "main-content">
        {leagues.map((leagues) => (
            <div key={leagues.id} className="league-item">
              <span className="league-name">
              {leagues.title}
              </span>
              <button className="edit-league"> 
              View
              </button>
            </div>
          ))}
          </div>
     );
}
 
export default LeagueList;