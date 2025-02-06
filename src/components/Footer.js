import React from "react";
import { FaGithub, FaLinkedin,FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    
    <footer className=" text-white text-center mt-auto fixed-bottom ">
    <div className="container " style={{color:'white'}}>
      <div className="row justify-content-center">
      
            
            
            <div className="col-auto">
                 <a href="tel:+15715675574" className="text-white"><FaPhone /> </a></div>
        <div className="col-auto">
          <a href="https://github.com/gokul" className="text-white"><FaGithub /></a>
        </div>
        <div className="col-auto">
          <a href="https://linkedin.com/in/gokul" className="text-white"><FaLinkedin /></a>
        </div>
        <div className="col-auto">
          <a href="mailto:gokul@example.com" className="text-white"><SiGmail /></a>
        </div>
           
       
        </div>
        <div className="row justify-content-center">
        <div className="col-auto" style={{fontSize:'10px'}}>&copy; 2025 Gokul Krishna Reddy </div>
        </div>
       
        
      </div>
    
  </footer>
  );
};

export default Footer;