import usePageNavigator from './usePageNavigator';
const Navbar = () => {

    const { handleGoToAdmin, handleGoToLeague, handleGoToLogin, handleGoToHome, 
        handleGoToSignup, handleGoToProfile} = usePageNavigator();
    return (  


        // functions imported from ./usePageNavigator
        // to add more pages, follow instructions in usePageNavigator.js
        <nav className="navbar">
                <button className = "home-button" onClick = {handleGoToHome}>Home Page</button>
                <button className = "profile-button" onClick = {handleGoToProfile}>Profile</button>
                <button className = "admin-button" onClick = {handleGoToAdmin}>Admin Page</button>
                <button className = "league-button" onClick = {handleGoToLeague}>League Page</button>
                <button className = "login-button" onClick = {handleGoToLogin}>Login</button>
                <button className = "signup-button" onClick = {handleGoToSignup}>Sign Up</button>
            </nav>
    );
}
 
export default Navbar;