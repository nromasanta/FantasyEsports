import usePageNavigator from './usePageNavigator';
const Navbar = () => {

    const { handleGoToAdmin, handleGoToLeague, handleGoToLogin, handleGoToHome, 
        handleGoToSignup, handleGoToProfile, handleGoToMyLeague} = usePageNavigator();
    return (  

        // NOTE that MyLeague is using league-button, change if you want
      
        // functions imported from ./usePageNavigator
        // to add more pages, follow instructions in usePageNavigator.js
        <nav className="navbar">
                <button className = "home-button" onClick = {handleGoToHome}>Home Page</button>
                <button className = "profile-button" onClick = {handleGoToProfile}>Profile</button>
                <button className = "admin-button" onClick = {handleGoToAdmin}>Admin Page</button>
                <button className = "league-button" onClick = {handleGoToLeague}>League Board</button>
                <button className = "league-button" onClick = {handleGoToMyLeague}>My League</button>
                <button className = "login-button" onClick = {handleGoToLogin}>Login</button>
                <button className = "signup-button" onClick = {handleGoToSignup}>Sign Up</button>
            </nav>
    );
}
 
export default Navbar;