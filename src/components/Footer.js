import React from "react";
import { FaGithub, FaLinkedin,FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    
    <footer className="text-white text-center mt-auto fixed-bottom">
    <div className="container px-3" style={{color:'white'}}>
      <div className="row justify-content-center">
        <div className="col-auto">
          <a href="tel:+15715675574" className="text-white me-3"><FaPhone /></a>
        </div>
        <div className="col-auto">
          <a href="https://github.com/gokulgaddam" className="text-white me-3"><FaGithub /></a>
        </div>
        <div className="col-auto">
          <a href="https://www.linkedin.com/in/gokul-krishna-reddy-gaddam/" className="text-white me-3"><FaLinkedin /></a>
        </div>
        <div className="col-auto">
          <a href="mailto:gokulkrishnareddygaddam@gmail.com" className="text-white"><SiGmail /></a>
        </div>
      </div>
      <div className="row justify-content-center mt-2">
        <div className="col-auto" style={{fontSize:'10px'}}>&copy; 2025 Gokul Krishna Reddy</div>
      </div>
       
        
      </div>
    
  </footer>
  );
};

export default Footer;