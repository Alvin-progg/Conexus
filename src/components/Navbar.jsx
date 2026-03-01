import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <span className="logo-text">CONEXUS</span>
        </div>
        
        <div className="navbar-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        
        <button className="navbar-cta">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
