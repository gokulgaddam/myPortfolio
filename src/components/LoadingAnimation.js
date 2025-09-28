import React from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = ({ onEnter }) => {
  return (
    <div className="loading-container" onClick={onEnter}>
      <div className="loading-screen">
        <div className="loading-text">
          <h1 className="welcome-title">Hello! I'm excited to see you here and tell you about myself. I hope you have a great rest of your day!</h1>
          
          <div className="enter-section">
            <p className="enter-text">Click anywhere to enter</p>
            <div className="click-indicator">
              <div className="mouse-icon">
                <div className="mouse-body"></div>
                <div className="mouse-scroll"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
