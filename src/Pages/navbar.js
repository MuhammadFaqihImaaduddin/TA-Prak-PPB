import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="navbar-logo"><img src='C:\Users\Asus\Music\ta_ppb_nyoba\public\istockphoto-1258141375-612x612.jpg'/></h1>
                <ul className="nav-links">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/destination" className="nav-link">Destination</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faq" className="nav-link">FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default navbar;