import React, { useState, useEffect, useMemo } from "react";
import myImage from "../assets/myImage.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
    <div id="home" className="text-white" style={{paddingTop: isMobile ? "10px" : "80px" }}>
      {/* Desktop Layout */}
      <div className="d-none d-lg-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh", padding: "40px 0" }}>
        {/* Top Section - Image and Intro */}
        <div className="d-flex flex-column align-items-center justify-content-center px-2 my-5">
          <div
            className="image-me d-flex align-items-center justify-content-center rounded-circle mb-5"
            style={{
              width: "250px",
              height: "250px",
              backgroundColor: "#fff",
              overflow: "hidden",
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}
          >
            <img
              src={myImage}
              alt="I am sorry, you can see me in a while..."
              className="img-fluid"
              style={{ objectFit: "cover" }}
            />
          </div>
          
          <div className="text-center my-1" >
            <h2 className="" style={{fontSize: "1.5rem", color: "#000000" }}>Hi, I am Gokul</h2>
            <h1 className="mt-3" style={{fontSize: "1.5rem", color: "#000000"}}>I am a {text}<span className="blinking-cursor">_</span></h1>
          </div>
        </div>

        {/* About Me Section - Retro Billboard */}
        <div className="w-100 d-flex justify-content-center">
          <div 
            className=" p-5 d-flex flex-column justify-content-start" 
            style={{ 
              backgroundColor: "#ffffff", 
              width: "70%", 
              minHeight: "400px",
              border: 'none',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              position: 'relative'
            }}
          >

            {/* Billboard Content */}
        <h1 className="mb-4 text-center" style={{color: '#000000', fontSize: '1.5rem', fontWeight: '400'}}>About Me</h1>
        <p style={{fontSize: '1rem', color: '#000000', lineHeight: "1.6", textAlign: 'center'}} className='text-wrap'>
              My journey began with a Bachelor's in Computer Science, where I discovered my passion for coding and web development. I fell in love with the creative process of building applications, mastering HTML, CSS, JavaScript, and React to bring ideas to life through code.

              That passion for programming led me to develop enterprise-grade applications and work extensively with various technologies including Python, SQL, and cloud platforms. I enjoy the challenge of solving complex problems through elegant code and creating user-friendly interfaces that make a real difference.
             
              Pursuing a Master's in Data Analytics Engineering has allowed me to expand my technical skills and work with cutting-edge technologies. Alongside my studies, I worked as a Teaching Assistant, helping students understand programming concepts and sharing my love for coding with others.
              <br />
              I love coding and making things happen through technology!
            </p>
          </div>
          </div>
      </div>

      {/* Mobile Layout */}
      <div className="d-lg-none" style={{ paddingTop: "10px" }}>
        {/* Hero Section */}
        <div className="container d-flex flex-column align-items-center justify-content-center text-center py-3" style={{ minHeight: "60vh" }}>
          <div
            className="image-me d-flex align-items-center justify-content-center rounded-circle mb-4"
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "#fff",
              overflow: "hidden",
              boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
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
            <h2 className="mb-3" style={{fontSize: "1.2rem", color: "#000000"}}>Hi, I am Gokul</h2>
            <h1 className="mt-2" style={{fontSize: "1.5rem", color: "#000000"}}>I am a {text}<span className="blinking-cursor">_</span></h1>
          </div>
        </div>

        {/* About Me Section - Retro Billboard Mobile */}
        <div className="w-100" style={{ padding: "40px 0", minHeight: "50vh" }}>
          <div className="container px-3">
            <div className="row justify-content-center">
              <div className="col-12">
                <div 
                  className="retro-billboard text-center" 
                  style={{ 
                    backgroundColor: "#ffffff", 
                    padding: "20px", 
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    position: 'relative'
                  }}
                >

              <h1 className="mb-3" style={{color: '#000000', fontSize: '1.3rem', fontWeight: '400'}}>About Me</h1>
              <p style={{fontSize: '0.9rem', color: '#000000', lineHeight: "1.6", marginBottom: "0", textAlign: 'center'}} className='text-wrap'>
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
