import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
    const pages = ['Profile', 'Overview', 'Settings']; // Pages
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <nav className="navbar">
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
                    <h1>Welcome to My App</h1>
                    <p>Discover a World of Possibilities</p>
                </header>
                <main className="main-content">
                    <section className="about-section">
                        <h2>About Us</h2>
                        <p>
                            Welcome to our amazing application. We provide a wide range of features
                            and services to make your life easier.
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
                        <p>Sign in or create an account to unlock the full potential of our app.</p>
                        <button className="get-started-button">Get Started</button>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;
