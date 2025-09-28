import React, { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track which section is currently in view
  useEffect(() => {
    const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    setIsExpanded(false);
    setActiveSection(sectionId);
    
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
    
    const toggleButton = document.querySelector('.navbar-toggler');
    if (toggleButton) {
      toggleButton.setAttribute('aria-expanded', 'false');
    }

    // Scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark custom-mobile-navbar container ">
      
        <a className="navbar-brand mx-md-5 mx-1 d-none" href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} style={{color: '#000000'}}>Gokul Krishna Reddy</a>
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
        <div className={`collapse navbar-collapse justify-content-end ${isExpanded ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav " >
          <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
                href="#home" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} 
                style={{
                  color: activeSection === 'home' ? '#007bff' : '#000000',
                  fontWeight: activeSection === 'home' ? 'bold' : 'normal',
                  transform: activeSection === 'home' ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} 
                href="#skills" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('skills'); }} 
                style={{
                  color: activeSection === 'skills' ? '#007bff' : '#000000',
                  fontWeight: activeSection === 'skills' ? 'bold' : 'normal',
                  transform: activeSection === 'skills' ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} 
                href="#experience" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('experience'); }} 
                style={{
                  color: activeSection === 'experience' ? '#007bff' : '#000000',
                  fontWeight: activeSection === 'experience' ? 'bold' : 'normal',
                  transform: activeSection === 'experience' ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('projects'); }} 
                style={{
                  color: activeSection === 'projects' ? '#007bff' : '#000000',
                  fontWeight: activeSection === 'projects' ? 'bold' : 'normal',
                  transform: activeSection === 'projects' ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }} 
                style={{
                  color: activeSection === 'contact' ? '#007bff' : '#000000',
                  fontWeight: activeSection === 'contact' ? 'bold' : 'normal',
                  transform: activeSection === 'contact' ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
     
    </nav>
  );
};

export default Navbar