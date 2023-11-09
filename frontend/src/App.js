import React from 'react';
import './landing.css';

function App() {
    const pages = ['Profile', 'Overview', 'Settings']; // Pages

    return (

        <div className="app-container">
            <aside className="sidebar">
                <div className="site-icon"></div>
                <div className="admin-username"></div>
                <div className="statistics"></div>
                <div className="user-reports"></div>
            </aside>
            <header className="header">
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
    );
}

export default App;