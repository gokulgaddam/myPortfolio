import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Experience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "CrowdDoing",
      period: "Mar 2025 – Present",
      isCurrent: true,
      tools: ["React", "JavaScript", "Node.js", "CSS", "Bootstrap"],
      highlights: [
        "Built interactive React components with charts and streak counters for user goal visualization",
        "Enhanced user engagement through dynamic data visualization features"
      ]
    },
    {
      id: 2,
      title: "Graduate Teaching Assistant",
      company: "George Mason University",
      period: "Jan 2023 – Dec 2024",
      isCurrent: false,
      tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "React"],
      highlights: [
        "Mentored 90+ students in web development fundamentals",
        "Improved student learning outcomes through hands-on coding sessions"
      ]
    },
    {
      id: 3,
      title: "Associate Software Engineer",
      company: "Accenture Solutions Pvt. Ltd.",
      period: "Sep 2021 – Jun 2022",
      isCurrent: false,
      tools: ["Node.js", "AWS", "Redis", "Jest", "React", "REST APIs"],
      highlights: [
        "Built and deployed scalable Node.js microservices on AWS, serving 50K+ users",
        "Integrated Redis caching, reducing API response times by 40%"
      ]
    },
    {
      id: 4,
      title: "Software Developer",
      company: "Kalpas Innovations Pvt. Ltd.",
      period: "Aug 2020 – Jul 2021",
      isCurrent: false,
      tools: ["React.js", "Node.js", "REST APIs", "Swagger", "OpenAPI"],
      highlights: [
        "Developed responsive React.js web pages for college predictor application",
        "Built Node.js backend with REST APIs for dynamic data retrieval"
      ]
    }
  ];

  const getToolIcon = (tool) => {
    const iconMap = {
      "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      "Jest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      "Swagger": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg"
    };
    return iconMap[tool] || "";
  };

  return (
    <div id="experience" className="my-5" style={{ padding: "0" }}>
      <h2 className="text-center mb-5 mt-4" style={{fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: '300', color: '#000000'}}>My Experience</h2>
      
      {/* Experience Cards Container */}
      <div className="position-relative" style={{ width: '100%' }}>
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className="position-relative mb-5" 
            style={{ 
              width: '100%', 
              display: 'flex', 
              justifyContent: isMobile ? 'center' : (index % 2 === 0 ? 'flex-start' : 'flex-end')
            }}
          >
            <div 
              className="experience-card"
              style={{
                backgroundColor: '#ffffff',
                border: 'none',
                borderRadius: '0px',
                padding: isMobile ? '1.5rem' : '2rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                width: isMobile ? '90%' : '60%',
                minHeight: isMobile ? '250px' : '300px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
              }}
            >
              {/* Header */}
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h3 
                    className="mb-1" 
                    style={{ 
                      fontSize: isMobile ? '1.2rem' : '1.4rem', 
                      fontWeight: '600', 
                      color: '#000000' 
                    }}
                  >
                    {exp.title}
                  </h3>
                  <h5 
                    className="mb-2" 
                    style={{ 
                      fontSize: isMobile ? '1rem' : '1.1rem', 
                      fontWeight: '500', 
                      color: '#666666' 
                    }}
                  >
                    {exp.company}
                  </h5>
                  <p 
                    className="mb-3" 
                    style={{ 
                      fontSize: isMobile ? '0.8rem' : '0.9rem', 
                      color: '#888888' 
                    }}
                  >
                    {exp.period}
                  </p>
                </div>
                {exp.isCurrent && (
                  <span 
                    className="badge px-3 py-2" 
                    style={{ 
                      backgroundColor: '#28a745', 
                      color: '#000000', 
                      fontSize: '0.8rem',
                      borderRadius: '20px'
                    }}
                  >
                    Current
                  </span>
                )}
              </div>

              {/* Tools */}
              <div className="mb-4">
                <h6 
                  style={{ 
                    fontSize: isMobile ? '0.8rem' : '0.9rem', 
                    fontWeight: '500', 
                    color: '#666666',
                    marginBottom: '0.8rem'
                  }}
                >
                  Key Tools Used:
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  {exp.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex}
                      className="d-flex align-items-center px-2 py-1"
                      style={{
                        backgroundColor: '#f8f8f8',
                        borderRadius: '6px',
                        border: '1px solid #e0e0e0',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#e8e8e8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f8f8';
                      }}
                    >
                      <img 
                        src={getToolIcon(tool)} 
                        alt={tool}
                        style={{
                          width: '16px',
                          height: '16px',
                          marginRight: '6px'
                        }}
                      />
                      <span 
                        style={{ 
                          fontSize: isMobile ? '0.7rem' : '0.8rem', 
                          color: '#000000' 
                        }}
                      >
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h6 
                  style={{ 
                    fontSize: isMobile ? '0.8rem' : '0.9rem', 
                    fontWeight: '500', 
                    color: '#666666',
                    marginBottom: '0.8rem'
                  }}
                >
                  Key Highlights:
                </h6>
                <ul className="list-unstyled">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <li 
                      key={highlightIndex}
                      className="mb-2"
                      style={{
                        fontSize: isMobile ? '0.8rem' : '0.9rem',
                        lineHeight: '1.5',
                        color: '#000000'
                      }}
                    >
                      <span 
                        style={{ 
                          color: '#000000',
                          marginRight: '8px',
                          fontWeight: 'bold'
                        }}
                      >
                        •
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;