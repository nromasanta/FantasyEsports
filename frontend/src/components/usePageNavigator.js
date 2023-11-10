import {useNavigate} from 'react-router-dom';

// How to add pages:
// 1. Create .js, place in ./pages directory

// 2. In App.js, use a <Route> tag to add it to the application's router

// 3. If you want button on-click functionality:
// 3.1 Create a function below
// 3.2 Add it to the return statement
// 3.3 The button should look similar to below  
// -------
// <button className = "example-button" onClick = {handleGoToExample}>Example</button>
// -------
// This calls the function in the brackets on click, which in turn uses this component to handle the navigation logic
// 3.4 Import the page at the top of App.js 



// I might reformat this to use props instead, cause this 
// is a little inefficient but it works 
const usePageNavigator = () => {

    // functionality from react-router-dom
    const navigate = useNavigate();

    // declare functions for each page we want
    // add functions in a similar fashion below
    const handleGoToAdmin = () => navigate('/admin');
    const handleGoToLeague = () => navigate('/league');
    const handleGoToLogin = () => navigate('/login');
    const handleGoToSignup = () => navigate('/signup');
    const handleGoToProfile = () => navigate('/profile');
    const handleGoToHome = () => navigate('/');

    return {
        // return each of our functions
        handleGoToAdmin,
        handleGoToLeague,
        handleGoToLogin,
        handleGoToHome,
        handleGoToSignup,
        handleGoToProfile
    };

};

export default usePageNavigator;