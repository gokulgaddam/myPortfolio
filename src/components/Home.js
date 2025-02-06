import React, { useState, useEffect } from "react";
//import myPhoto from "../assets/myPhoto.svg";
import myImage from "../assets/myImage.png"
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ["I am a Data Engineer", "I am a Data Analyst"];
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
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <div className="container ml-2 d-flex align-items-center justify-content-center min-vh-100 text-white">
      <div className="row w-100">
        <div className="col-md-2"></div>
        <div className="col-md-4 d-flex flex-column justify-content-center ">
          <h3 className="">Hi! I am Gokul</h3>
          <h1 className="mt-2">{text}</h1>
        </div>
              <div
            className="col-md-8 d-flex justify-content-center align-items-center rounded-circle"
            style={{
              width: "250px",
              height: "250px",
              backgroundColor: "#fff",
              overflow: "hidden",
            }}
          >
            <img
              src={myImage}
              alt="Subject"
              className="img-fluid"
              style={{ objectFit: "cover" }}
            />
          </div>
          
    </div>
    
      </div>
   
  );
};

export default Home;
