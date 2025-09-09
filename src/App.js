import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#283747" }}>
    <Router>
      <Navbar />
      
      <Routes>
        
        <Route path="/" element={<Navigate to="/home" replace />} />
        
      
        <Route path="/home" element={<Home />} />
        
      
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        
        
      </Routes>

      <Footer />
    </Router>
    </div>
  );
};

export default App;
