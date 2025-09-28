import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div 
      className="progress-bar"
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '4px',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        zIndex: 9999
      }}
    >
      <div 
        style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #ff0000 0%, #cc0000 50%, #ff0000 100%)',
          transition: 'width 0.1s ease-out',
          boxShadow: '0 0 10px rgba(255, 0, 0, 0.5)'
        }}
      />
    </div>
  );
};

export default ProgressBar;
