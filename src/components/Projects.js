import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub } from "react-icons/fa";
import F1Image from "../assets/F1.png";
import DNS from "../assets/dnssec.png";
import pb1 from "../assets/customer_feedback.png";
import pb2 from "../assets/sales.png";
import cdc from "../assets/cdc.png";
import stock from "../assets/stocks.png";
import nashik from "../assets/housing.png";
import moodSyncImage from "../assets/moodsync.png";

// CSS for bouncing arrows animation
const arrowStyles = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  .card:hover .arrow {
    animation: bounce 1s infinite;
  }
`;

// Inject the styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = arrowStyles;
  document.head.appendChild(styleSheet);
}
const projects = [
  { id: 1, title: "Mood Sync", 
    image: moodSyncImage, 
    github: "https://github.com/gokulgaddam/MoodSync",
    technologies: ["React.js", "Spotify API", "OAuth", "JavaScript", "CSS"],
    info:["Developed a full-stack web application that integrates with Spotify API to provide personalized music recommendations based on user mood and preferences",
      "Built interactive frontend with React.js for seamless user experience, allowing users to input their current mood and music preferences",
      "Implemented secure OAuth authentication with Spotify API to access user's music library and generate custom playlists",
      "Created dynamic recommendation engine that processes user variables and mood indicators to fetch relevant tracks from Spotify's extensive music database"
    ] },
  { id: 2, title: "Stock Market Data Pipeline", 
    image: stock, 
    github: "https://github.com/gokulgaddam/stocks_data_pipeline",
    technologies: ["Apache Airflow", "dbt", "Snowflake", "Polygon API", "Python"],
    info:["Built a production-ready stock market data pipeline using Apache Airflow with Astronomer Cosmos to extract daily stock price snapshots from Polygon.io API",
      "Implemented automated data loading into Snowflake cloud data warehouse with incremental and partitioned models for optimal performance",
      "Created comprehensive dbt transformations including SCD2 snapshots for historical ticker metadata and aggregated marts for analytics",
      "Developed modular pipeline architecture with daily ingestion, holiday handling, and automated data quality testing for reliable financial data processing"
    ] },
  { id: 3, title: "Formula 1",
    image: F1Image,
    github: "", 
    technologies: ["Azure Databricks", "Azure Synapse", "PySpark", "ETL", "SQL"],
    info:["Developed and coded an ETL pipeline using Azure Databricks and automated the jobs using Data Pipelines (ADF) using Azure Synapse, analyzing and visualizing Formula-1 race data."
 , "Utilized PowerBI for in-depth data visualization and analysis, providing actionable insights into race performances and trends."]},
  { id: 4, title: "DNSSEC server analysis", 
    image: DNS, 
    github: "https://github.com/dhanya0509/DNSSEC_Impact_Analysis",
    technologies: ["Amazon EMR", "MariaDB", "Apache Spark", "SQL", "YouTrack"],
    info:["Developed scalable data pipelines in MariaDB using Amazon EMR, optimizing Spark and SQL queries to reduce data processing times by40%",
      "Collaborated in an Agile team using YouTrack, delivering secure and efficient pipelines for DNSSEC data analysis in Indonesia.",
      "Ensured data compliance and security for the GMU CARE MSL database, enabling reliable insights for decision-making."
    ]},
  { id: 5, title: "Nashik house price prediction", 
    image: nashik, 
    github: "https://github.com/gokulgaddam/Nashik_house_price_prediction/",
    technologies: ["XGBoost", "Python", "Data Modeling", "Machine Learning", "Pandas"],
    info:["Developed a housing price prediction model using XGBoost and data modeling techniques, achieving a root mean square error(RMSE) of 3.9lakhs, demonstrating accuracy in predictive analytics, accounting principles, and design analysis capabilities forcampus-level applications.",
      "Performed feature engineering and data preprocessing, optimizing model performance by identifying key variables influencing using prices"
    ] },
    { id: 6, title: "Customer Feedback Dashboard ", 
      image: pb1, 
      github: "",
      technologies: ["Power BI", "Data Visualization", "DAX", "SQL", "Excel"],
      info:["Developed an interactive Power BI dashboard to analyze customer feedback, integrating multiple data sources for real-time insights",
        "Designed engaging visualizations using bar charts, pie charts, and trend analysis graphs, enhancing data storytelling"
      ] },
      { id: 7, title: "Sales Dashboard ", 
        image: pb2, 
        github: "",
        technologies: ["Power BI", "Data Analysis", "DAX", "SQL", "Business Intelligence"],
        info:["Developed an interactive Power BI Sales Dashboard to track sales performance across products and regions, enhancing business decision-making.",
          "Integrated and transformed raw sales data to calculate Total After Discount for each product, ensuring accurate revenue insights."
        ] },
        { id: 8, title: "CDC of mock data", 
          image: cdc, 
          github: "",
          technologies: ["Apache Kafka", "PostgreSQL", "Debezium", "Zookeeper", "Real-time Processing"],
          info:["Built a real-time data pipeline using Kafka, Zookeeper, and Debezium to capture changes from a PostgreSQL database",
            "Configured Kafka topics and consumer groups to efficiently process and stream insert, update, and delete events.",
            "Tested the pipeline with mock CDC data, ensuring smooth event flow, data accuracy, and system reliability"
          ] }

];



const Projects = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCard = (projectId) => {
    setExpandedCards(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <div id="projects" className="container my-5 px-0">
      <h2 className="text-center mb-5 mt-4" style={{fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: '300', color: '#000000'}}>My Projects</h2>
      
      <div className="row mt-4">
        {projects.map((project, index) => (
          <div key={project.id} className="col-12 col-md-6 mt-4">
            <div 
              className="card w-100 border-2 position-relative overflow-hidden" 
              style={{
                height: isMobile ? "35vh" : "50vh",
                minHeight: isMobile ? "35vh" : "50vh",
                maxHeight: isMobile ? "35vh" : "50vh",
                cursor: "pointer",
                transition: 'all 0.3s ease, transform 0.1s ease-out',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                transform: 'scale(1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(0.98)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(0.98)';
              }}
              onClick={() => toggleCard(project.id)}
            >
              {/* Background Image with Padding */}
              <div 
                className="position-absolute"
                style={{
                  top: "0px",
                  left: "0px",
                  right: "0px",
                  bottom: "0px",
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                
                  filter: expandedCards[project.id] ? "brightness(0.3)" : "brightness(0.9)",
                  
                }}
              />
              
              {/* 3D Effect Overlay */}
              {!expandedCards[project.id] && (
                <div 
                  className="position-absolute w-100 h-100 project-overlay"
                  style={{
                    backgroundColor: isMobile ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease"
                  }}
                />
              )}
              
              {/* Desktop Full Opacity Overlay When Expanded */}
              {expandedCards[project.id] && !isMobile && (
                <div 
                  className="position-absolute w-100 h-100 project-overlay"
                  style={{
                    backgroundColor: "rgba(0,0,0,1)",
                    transition: "all 0.3s ease",
                    zIndex: 10
                  }}
                />
              )}
              
              {/* Mobile Full Opacity Overlay When Expanded */}
              {expandedCards[project.id] && isMobile && (
                <div 
                  className="position-absolute w-100 h-100 project-overlay"
                  style={{
                    backgroundColor: "rgba(0,0,0,1)",
                    transition: "all 0.3s ease",
                    zIndex: 10
                  }}
                />
              )}
              
              {/* Content */}
              <div 
                className="position-relative h-100" 
                style={{ 
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  color: "#ffffff",
                  zIndex: 15
                }}
              >
                {/* Expandable Content */}
                <div 
                  className={`w-100 ${expandedCards[project.id] ? 'd-block' : 'd-none'}`}
                  style={{
                    transition: "all 0.3s ease",
                    maxHeight: expandedCards[project.id] ? (isMobile ? "200px" : "250px") : "0px",
                    overflow: "hidden"
                  }}
                >
                  <div className="text-center">
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                      <h4 className="fw-bold mb-0" style={{ fontSize: isMobile ? "1.1rem" : "1.3rem", color: "#ffffff" }}>
                        {project.title}
                      </h4>
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ fontSize: "1rem", textDecoration: "none", color: "#ffffff" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                    
                    <div 
                      className="text-start"
                      style={{ 
                        maxHeight: isMobile ? "150px" : "200px", 
                        overflowY: "auto",
                        fontSize: isMobile ? "0.8rem" : "0.9rem",
                        lineHeight: "1.4"
                      }}
                    >
                      <ul className="list-unstyled">
                        {project.info.map((info, index) => (
                          <li key={index} className="mb-2" style={{ color: "#ffffff" }}>
                            <span style={{ color: "#000000" }}>•</span> {info}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {project.github && (
                      <div className="mt-3">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-outline-light btn-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="me-2" />
                          View Code
                        </a>
                      </div>
                    )}
                  </div>
                </div>
               
              </div>
               
                {/* Bottom Section - Title and Click Indicator */}
                <div 
                  className="w-100 text-center position-absolute bottom-0 end-0" 
                  style={{ padding: isMobile ? "0.2rem" : "0.3rem", margin:"10px", backgroundColor: "rgba(0,0,0,0.6)", color: "#000000", minHeight: isMobile ? "60px" : "80px" }}
                >
                  
                  
                  {/* Technologies */}
                  {!expandedCards[project.id] && (
                    <div>
                      <div className="d-flex flex-wrap justify-content-center gap-1">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="badge bg-dark text-white px-2 py-1"
                            style={{ fontSize: isMobile ? "0.7rem" : "0.8rem", color: "#000000", margin:"10px" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Animated Arrow */}
                      <div 
                        className="arrow-container d-flex justify-content-center align-items-center mt-3"
                      >
                        <div 
                          className="arrow"
                          style={{
                            width: '0',
                            height: '0',
                            borderLeft: '8px solid transparent',
                            borderRight: '8px solid transparent',
                            borderTop: '12px solid #ffffff'
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
