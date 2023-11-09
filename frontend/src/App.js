import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Admin from './pages/admin';
import './App.css';



function App() {
    const pages = ['Profile', 'Admin', 'Settings']; // Pages
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navigate = useNavigate();

    const handleGoToAdmin = () => {
        navigate('/admin');
    };

    const handleGoToHome = () => {
        navigate('/');
    };

    return(
        <div>
            <nav className="navbar">
                <button className = "home-button" onClick = {handleGoToHome}>Home Page</button>
                <button className = "admin-button" onClick = {handleGoToAdmin}>Admin Page</button>
                <button className="login-button">Login</button>
                <button className="signup-button">Sign Up</button>
            </nav>
            <div className="container">
                <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <div className="site-icon"></div>
                    {/* Add sidebar content here */}
                </aside>

                <header className="header">
                    <button className="sidebar-toggle" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <h1>CSUB Esports</h1>
                    <p>Placeholder</p>
                </header>
                <main className="main-content">
                    <Routes>
                        <Route path="/" element = {
                    <>
                    <section className="about-section">
                        <h2>About Us</h2>
                        <p>
                            Temporary front-end while we work on site functionality.
                        </p>
                    </section>
                    <section className="features-section">
                        <h2>Key Features</h2>
                        <ul>
                            <li>Profile Management</li>
                            <li>Data Overview</li>
                            <li>Settings Configuration</li>
                            {/* Add more features as needed */}
                        </ul>
                    </section>
                    <section className="get-started-section">
                        <h2>Get Started</h2>
                        <p>Potential welcome message placeholder</p>
                        <button className="get-started-button">Get Started</button>
                    </section>
                    </>
                        } />
                        <Route path = "/admin" element ={<Admin />}/>
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
