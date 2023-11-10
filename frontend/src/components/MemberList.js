//import React, { useState } from 'react';

// HOW TO USE: 
// 1. Create an array object that looks like this: 
//-----------------------------------------
// const [leagues, setLeagues] = useState([
//    { title: "League 1", id: 1 },
//    { title: "League 2", id: 2 },
//    { title: "League 3", id: 3 },
//  ]); 
//-----------------------------------------
// 2. Pass into LeagueList using this: 
//-----------------------------------------
// <LeagueList leagues = {leagues}/>
//-----------------------------------------
// 3. The .map() function below will display the array kind
// of like a loop? You can change the class names here for CSS
// styling I don't hink it will affect the functionality too much



// props is an object that holds a bunch of things you pass it, 
// for example if I did <LeagueList leagues = {leagues} title = "All Leagues"/>
// I can access the title by doing props.title 

const MemberList = (props) => {

    const members = props.members;
    
    return ( 
        <div className = "main-content">
        {members.map((members) => (
            <div key={members.id} className="league-item">
              <span className="league-name">
              {members.title}
              </span>
              <button className="edit-league"> 
              Kick
              </button>
            </div>
          ))}
          </div>
     );
}
 
export default MemberList;