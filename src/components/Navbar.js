

// components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLinkClick = () => {
    setIsExpanded(false);
    
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
    
    const toggleButton = document.querySelector('.navbar-toggler');
    if (toggleButton) {
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top custom-mobile-navbar container">
      
        <Link className="navbar-brand mx-md-5 mx-1 d-none" to="/home" >Gokul Krishna Reddy</Link>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-center ${isExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav " >
          <li className="nav-item">
              <Link className="nav-link" to="/home" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience" onClick={handleLinkClick}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={handleLinkClick}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
        </div>
     
    </nav>
  );
};

export default Navbar