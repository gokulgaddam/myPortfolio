import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Experience = () => {
  const dotRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Dot intersection:', entry.isIntersecting, entry.target);
          if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(2)';
            entry.target.style.transition = 'transform 0.5s ease';
            console.log('Scaling up dot');
          } else {
            entry.target.style.transform = 'scale(1)';
            console.log('Scaling down dot');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the dot is visible
        rootMargin: '0px 0px -50px 0px' // Start animation when dot is 50px from bottom of viewport
      }
    );

    // Add a small delay to ensure all refs are set
    setTimeout(() => {
      console.log('All dot refs:', dotRefs.current);
      Object.values(dotRefs.current).forEach((dot, index) => {
        if (dot) {
          console.log(`Observing dot ${index}:`, dot);
          observer.observe(dot);
        } else {
          console.log(`Dot ${index} is null`);
        }
      });
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container my-5 px-0">
      <h2 className="text-center mb-5 mt-4 text-light">My Experience</h2>
      
      {/* Timeline Container */}
      <div className="position-relative">
        {/* Timeline Line - Hidden on mobile */}
        <div className="position-absolute start-50 translate-middle-x d-none d-md-block" style={{
          width: '2px',
          height: '100%',
          backgroundColor: '#ffffff',
          zIndex: 1
        }}></div>

        {/* Experience Items */}
        <div className="row mb-5">
          {/* Left Side - CrowdDoing */}
          <div className="col-12 col-md-5 pe-md-4">
            <div className="card shadow-lg border-2" style={{ backgroundColor: "#ffffff", borderRadius: "12px", minHeight: "200px" }}>
              <div className="card-body p-5">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <h3 className="card-title text-primary mb-0" style={{ fontSize: '1.5rem' }}>Software Engineer – ReactNative</h3>
                  <span className="badge bg-primary" style={{ fontSize: '1rem' }}>Current</span>
                </div>
                <h5 className="text-muted mb-3" style={{ fontSize: '1.1rem' }}>CrowdDoing</h5>
                <p className="text-muted mb-3" style={{ fontSize: '1.1rem' }}>Mar 2025 – Present</p>
                <p className="card-text" style={{ fontSize: '1rem', lineHeight: "1.7" }}>
                  • Built interactive React components, including charts and streak counters to visualize user goals
                </p>
              </div>
            </div>
          </div>
          
          {/* Timeline Dot - Hidden on mobile */}
          <div className="col-2 d-none d-md-flex justify-content-center align-items-center">
            <div 
              ref={(el) => dotRefs.current['dot-0'] = el}
              data-dot-id="0"
              className="rounded-circle bg-white border border-3 border-primary" 
              style={{
                width: '20px',
                height: '20px',
                zIndex: 2,
                position: 'relative',
                transition: 'transform 0.5s ease'
              }}
            ></div>
          </div>
          
          {/* Right Side - Date - Hidden on mobile */}
          <div className="col-12 col-md-5 ps-md-4 d-none d-md-flex align-items-center">
            <div className="text-center">
              <p className="text-white mb-0" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Mar 2025</p>
              <p className="text-white mb-0" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Present</p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          {/* Left Side - Date - Hidden on mobile */}
          <div className="col-12 col-md-5 pe-md-4 d-none d-md-flex align-items-center justify-content-end">
            <div className="text-center">
              <p className="text-white mb-0" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Jan 2023</p>
              <p className="text-white mb-0" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Dec 2024</p>
            </div>
          </div>
          
          {/* Timeline Dot - Hidden on mobile */}
          <div className="col-2 d-none d-md-flex justify-content-center align-items-center">
            <div 
              ref={(el) => dotRefs.current['dot-1'] = el}
              data-dot-id="1"
              className="rounded-circle bg-white border border-3 border-primary" 
              style={{
                width: '20px',
                height: '20px',
                zIndex: 2,
                position: 'relative',
                transition: 'transform 0.5s ease'
              }}
            ></div>
          </div>
          
          {/* Right Side - GMU */}
          <div className="col-12 col-md-5 ps-md-4">
            <div className="card shadow-lg border-2" style={{ backgroundColor: "#ffffff", borderRadius: "12px", minHeight: "200px" }}>
              <div className="card-body p-5">
                <h3 className="card-title text-primary mb-4" style={{ fontSize: '1.5rem' }}>Graduate Teaching Assistant – Web Development</h3>
                <h5 className="text-muted mb-3" style={{ fontSize: '1.1rem' }}>George Mason University</h5>
                <p className="text-muted mb-3" style={{ fontSize: '1.1rem' }}>Jan 2023 – Dec 2024</p>
                <p className="card-text" style={{ fontSize: '1rem', lineHeight: "1.7" }}>
                  • Mentored 90+ students in web development fundamentals (HTML, CSS, Bootstrap)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          {/* Left Side - Accenture */}
          <div className="col-12 col-md-5 pe-md-4">
            <div className="card shadow-lg border-2" style={{ backgroundColor: "#ffffff", borderRadius: "12px", minHeight: "280px" }}>
              <div className="card-body p-5">
                <h3 className="card-title text-primary mb-4" style={{ fontSize: '1.5rem' }}>Associate Software Engineer – Full Stack</h3>
                <h5 className="text-muted mb-3" style={{ fontSize: '1.1rem' }}>Accenture Solutions Pvt. Ltd.</h5>
                <p className="text-muted mb-3" style={{ fontSize: '1.1rem' }}>Sep 2021 – Jun 2022</p>
                <p className="card-text" style={{ fontSize: '1rem', lineHeight: "1.7" }}>
                  • Built and deployed scalable Node.js microservices on AWS, delivering application to 50K+ users
                  <br />
                  • Integrated Redis caching into Node.js services, reducing API response times by 40%
                  <br />
                  • Designed and optimized RESTful APIs, ensuring secure data flow and seamless integration
                  <br />
                  • Implemented unit and integration tests with Jest and Mocha, reducing production bugs
                  <br />
                  • Contributed to React front-end components, improving dashboard responsiveness
                </p>
              </div>
            </div>
          </div>
          
          {/* Timeline Dot - Hidden on mobile */}
          <div className="col-2 d-none d-md-flex justify-content-center align-items-center">
            <div 
              ref={(el) => dotRefs.current['dot-2'] = el}
              data-dot-id="2"
              className="rounded-circle bg-white border border-3 border-primary" 
              style={{
                width: '20px',
                height: '20px',
                zIndex: 2,
                position: 'relative',
                transition: 'transform 0.5s ease'
              }}
            ></div>
          </div>
          
          {/* Right Side - Date - Hidden on mobile */}
          <div className="col-12 col-md-5 ps-md-4 d-none d-md-flex align-items-center">
            <div className="text-center">
              <p className="text-white mb-0" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Sep 2021</p>
              <p className="text-white mb-0" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Jun 2022</p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          {/* Left Side - Date - Hidden on mobile */}
          <div className="col-12 col-md-5 pe-md-4 d-none d-md-flex align-items-center justify-content-end">
            <div className="text-center">
              <p className="text-white mb-0" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Aug 2020</p>
              <p className="text-white mb-0" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Jul 2021</p>
            </div>
          </div>
          
          {/* Timeline Dot - Hidden on mobile */}
          <div className="col-2 d-none d-md-flex justify-content-center align-items-center">
            <div 
              ref={(el) => dotRefs.current['dot-3'] = el}
              data-dot-id="3"
              className="rounded-circle bg-white border border-3 border-primary" 
              style={{
                width: '20px',
                height: '20px',
                zIndex: 2,
                position: 'relative',
                transition: 'transform 0.5s ease'
              }}
            ></div>
          </div>
          
          {/* Right Side - Kalpas */}
          <div className="col-12 col-md-5 ps-md-4">
            <div className="card shadow-lg border-2" style={{ backgroundColor: "#ffffff", borderRadius: "12px", minHeight: "240px" }}>
              <div className="card-body p-5">
                <h3 className="card-title text-primary mb-4" style={{ fontSize: '1.5rem' }}>Software Developer – Full Stack</h3>
                <h5 className="text-muted mb-3" style={{ fontSize: '1.1rem' }}>Kalpas Innovations Pvt. Ltd.</h5>
                <p className="text-muted mb-3" style={{ fontSize: '1.1rem' }}>Aug 2020 – Jul 2021</p>
                <p className="card-text" style={{ fontSize: '1rem', lineHeight: "1.7" }}>
                  • Developed responsive React.js web pages for a College Predictor application
                  <br />
                  • Built and integrated a Node.js backend with REST APIs for dynamic data retrieval
                  <br />
                  • Authored technical documentation using Swagger/OpenAPI for clear API specifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
