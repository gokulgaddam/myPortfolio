import React, { useState, useEffect, useMemo } from "react";
//import myPhoto from "../assets/myPhoto.svg";
import myImage from "../assets/myImage.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";

const Home = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = useMemo(() => ["Software Engineer", "Web Developer"], []);
  const typingSpeed = 100;
  const delayBetweenPhrases = 1500;

  useEffect(() => {
    const type = () => {
      if (!isDeleting && charIndex < phrases[phraseIndex].length) {
        setText((prev) => prev + phrases[phraseIndex].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === phrases[phraseIndex].length) {
        setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setCharIndex(0);
      }
    };

    const timeout = setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <div className="min-vh-100 text-white" style={{ backgroundColor: "#283747" }}>
      {/* Desktop Layout */}
      <div className="d-none d-lg-flex align-items-center" style={{ height: "100vh" }}>
        {/* Left Side - Image and Intro */}
        <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center px-2">
          <div
            className="image-me d-flex align-items-center justify-content-center rounded-circle mb-4"
            style={{
              width: "280px",
              height: "280px",
              backgroundColor: "#fff",
              overflow: "hidden",
            }}
          >
            <img
              src={myImage}
              alt="I am sorry, you can see me in a while..."
              className="img-fluid"
              style={{ objectFit: "cover" }}
            />
          </div>
          
          <div className="text-center">
            <h2 className="mb-3" style={{fontSize: "2rem "}}>Hi! I am Gokul</h2>
            <h1 className="mt-2" style={{fontSize: "2rem "}}>I am a {text}</h1>
          </div>
        </div>

        {/* Right Side - About Me Section - Positioned to right edge */}
        <div className="position-absolute end-0 d-flex align-items-center justify-content-center " style={{ width: "50%", height: "100vh" }}>
          <div className="p-4 d-flex flex-column justify-content-start" style={{ backgroundColor: "#ffffff", boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.1)",  maxWidth: "100%", height: "60vh", overflowY: "auto", marginTop: "10vh" }}>
              <h1 className="mb-4 text-center" style={{fontFamily: "'Rajdhani', 'sans-serif'", color: '#333', fontSize: '1.5rem'}}><bold>ABOUT ME</bold></h1>
              <p style={{fontFamily: "'Rajdhani', 'sans-serif'", fontSize: '1rem', color: '#333', lineHeight: "1.5"}} className='text-wrap'>
                My journey began with a Bachelor's in Computer Science, where I discovered my passion for coding and web development. I fell in love with the creative process of building applications, mastering HTML, CSS, JavaScript, and React to bring ideas to life through code.

                That passion for programming led me to develop enterprise-grade applications and work extensively with various technologies including Python, SQL, and cloud platforms. I enjoy the challenge of solving complex problems through elegant code and creating user-friendly interfaces that make a real difference.
               
                Pursuing a Master's in Data Analytics Engineering has allowed me to expand my technical skills and work with cutting-edge technologies. Alongside my studies, I worked as a Teaching Assistant, helping students understand programming concepts and sharing my love for coding with others.
                <br />
                I love coding and making things happen through technology!
                <br />
 
                
              </p>
            </div>
          </div>
      </div>

      {/* Mobile Layout */}
      <div className="d-lg-none mt-5">
        {/* Hero Section */}
        <div className="container d-flex flex-column align-items-center justify-content-center text-center py-5" style={{ minHeight: "60vh" }}>
          <div
            className="image-me d-flex align-items-center justify-content-center rounded-circle mb-4"
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "#fff",
              overflow: "hidden",
            }}
          >
            <img
              src={myImage}
              alt="I am sorry, you can see me in a while..."
              className="img-fluid"
              style={{ objectFit: "cover" }}
            />
          </div>
          
          <div className="px-3">
            <h2 className="mb-3" style={{fontSize: "1.5rem !important"}}>Hi! I am Gokul</h2>
            <h1 className="mt-2" style={{fontSize: "2rem !important"}}>I am a {text}</h1>
          </div>
        </div>

        {/* About Me Section - Below on mobile */}
        <div className="w-100" style={{ backgroundColor: "#ffffff", padding: "40px 0", minHeight: "auto" }}>
          <div className="container px-3">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="text-center" style={{ paddingBottom: "20px" }}>
                  <h1 className="mb-4" style={{fontFamily: "'Rajdhani', 'sans-serif'", color: '#333', fontSize: '1.5rem !important'}}>ABOUT ME</h1>
                  <p style={{fontFamily: "'Rajdhani', 'sans-serif'", fontSize: '1rem !important', color: '#333', lineHeight: "1.6", marginBottom: "0"}} className='text-wrap'>
                    My journey began with a Bachelor's in Computer Science, where I discovered my passion for coding and web development. I fell in love with the creative process of building applications, mastering HTML, CSS, JavaScript, and React to bring ideas to life through code.

                    That passion for programming led me to develop enterprise-grade applications and work extensively with various technologies including Python, SQL, and cloud platforms. I enjoy the challenge of solving complex problems through elegant code and creating user-friendly interfaces that make a real difference.
                    <br />
                    Pursuing a Master's in Data Analytics Engineering has allowed me to expand my technical skills and work with cutting-edge technologies. Alongside my studies, I worked as a Teaching Assistant, helping students understand programming concepts and sharing my love for coding with others.

                    Now, I'm seeking opportunities as a Software Engineer or Web Developer, eager to build innovative solutions and continue growing as a developer.
                    <br /><br />
                    Let me know if you wanna connect, whether it's talking about building a new website, creating an application, or collaborating on exciting projects.  
                    I love coding and making things happen through technology!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
