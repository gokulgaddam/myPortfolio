import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import LoadingAnimation from "./components/LoadingAnimation";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const handleEnter = () => {
    setIsLoading(false);
  };

  // Show loading animation while loading
  if (isLoading) {
    return <LoadingAnimation onEnter={handleEnter} />;
  }

  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      {/* Progress Bar */}
      <ProgressBar />
      
      {/* Global Background Color */}
      <div 
        className="position-fixed w-100 h-100"
        style={{
          backgroundColor: "#f2f2f2 ",
          zIndex: -1,
          opacity: 1
        }}
      />
      
      
      <Navbar />
      
      {/* Single Page Layout - All sections stacked vertically */}
      <Home />
      
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      
      <Footer />
    </div>
  );
};

export default App;
