import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#283747" }}>
    <Router>
    <Navbar />
     
      
      <Routes>
        <Route path="/" element={<Home />} />
         {/*\
        <Route path="/about" element={<About />} />*/}
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      
      <Footer />
    </Router>
    </div>
  );
};

export default App;
