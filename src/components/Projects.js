import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub } from "react-icons/fa";
import F1Image from "../assets/F1.png";
import DNS from "../assets/dnssec.png";
import DBMS from "../assets/dbms.png";
import pb1 from "../assets/pb1_customer.jpg";
import pb2 from "../assets/pb2.jpg";
import cdc from "../assets/cdc.png";
import moodSyncImage from "../assets/image.png";
const projects = [
  { id: 1, title: "Mood Sync", 
    image: moodSyncImage, 
    github: "",
    info:["Developed a full-stack web application that integrates with Spotify API to provide personalized music recommendations based on user mood and preferences",
      "Built interactive frontend with React.js for seamless user experience, allowing users to input their current mood and music preferences",
      "Implemented secure OAuth authentication with Spotify API to access user's music library and generate custom playlists",
      "Created dynamic recommendation engine that processes user variables and mood indicators to fetch relevant tracks from Spotify's extensive music database"
    ] },
  { id: 2, title: "Formula 1",
    image: F1Image,
    github: "", 
    info:["Developed and coded an ETL pipeline using Azure Databricks and automated the jobs using Data Pipelines (ADF) using Azure Synapse, analyzing and visualizing Formula-1 race data."
 , "Utilized PowerBI for in-depth data visualization and analysis, providing actionable insights into race performances and trends."]},
  { id: 3, title: "DNSSEC server analysis", 
    image: DNS, 
    github: "https://github.com/dhanya0509/DNSSEC_Impact_Analysis",
    info:["Developed scalable data pipelines in MariaDB using Amazon EMR, optimizing Spark and SQL queries to reduce data processing times by40%",
      "Collaborated in an Agile team using YouTrack, delivering secure and efficient pipelines for DNSSEC data analysis in Indonesia.",
      "Ensured data compliance and security for the GMU CARE MSL database, enabling reliable insights for decision-making."
    ]},
  { id: 4, title: "Hospital DBMS", 
    image: DBMS, 
    github: "https://github.com/gokulgaddam/Hospital-DBMS",
    info:["Developed a housing price prediction model using XGBoost and data modeling techniques, achieving a root mean square error(RMSE) of 70,000, demonstrating accuracy in predictive analytics, accounting principles, and design analysis capabilities forcampus-level applications.",
      "Performed feature engineering and data preprocessing, optimizing model performance by identifying key variables influencing using prices"
    ] },
    { id: 5, title: "Customer Feedback Dashboard ", 
      image: pb1, 
      github: "",
      info:["Developed an interactive Power BI dashboard to analyze customer feedback, integrating multiple data sources for real-time insights",
        "Designed engaging visualizations using bar charts, pie charts, and trend analysis graphs, enhancing data storytelling"
      ] },
      { id: 6, title: "Sales Dashboard ", 
        image: pb2, 
        github: "",
        info:["Developed an interactive Power BI Sales Dashboard to track sales performance across products and regions, enhancing business decision-making.",
          "Integrated and transformed raw sales data to calculate Total After Discount for each product, ensuring accurate revenue insights."
        ] },
        { id: 7, title: "CDC of mock data", 
          image: cdc, 
          github: "",
          info:["Built a real-time data pipeline using Kafka, Zookeeper, and Debezium to capture changes from a PostgreSQL database",
            "Configured Kafka topics and consumer groups to efficiently process and stream insert, update, and delete events.",
            "Tested the pipeline with mock CDC data, ensuring smooth event flow, data accuracy, and system reliability"
          ] }

];



const Projects = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (projectId) => {
    setExpandedCards(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <div className="container my-5 px-0">
      <h2 className="text-center mb-5 mt-4 text-light">My Projects</h2>
      
      <div className="row mt-4">
        {projects.map((project) => (
          <div key={project.id} className="col-12 col-md-6 col-lg-4 mt-4">
            <div 
              className="card w-100 shadow-lg border-2 position-relative overflow-hidden" 
              style={{
                height: "50vh !important",
                minHeight: "50vh",
                maxHeight: "50vh",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onClick={() => toggleCard(project.id)}
            >
              {/* Background Image */}
              <div 
                className="position-absolute w-100 h-100"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  filter: expandedCards[project.id] ? "brightness(0.3)" : "brightness(0.9)"
                }}
              />
              
              {/* Dark Overlay */}
              <div 
                className="position-absolute w-100 h-100"
                style={{
                  backgroundColor: expandedCards[project.id] ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.3)"
                }}
              />
              
              {/* Content */}
              <div 
                className="position-relative h-100 text-white" 
                style={{ 
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* Expandable Content */}
                <div 
                  className={`w-100 ${expandedCards[project.id] ? 'd-block' : 'd-none'}`}
                  style={{
                    transition: "all 0.3s ease",
                    maxHeight: expandedCards[project.id] ? "250px" : "0px",
                    overflow: "hidden"
                  }}
                >
                  <div className="text-center">
                    <h6 className="mb-3 fw-bold" style={{ fontSize: "1.1rem" }}>
                      Project Details
                    </h6>
                    
                    <div 
                      className="text-start"
                      style={{ 
                        maxHeight: "200px", 
                        overflowY: "auto",
                        fontSize: "0.9rem",
                        lineHeight: "1.4"
                      }}
                    >
                      <ul className="list-unstyled">
                        {project.info.map((info, index) => (
                          <li key={index} className="mb-2">
                            <span className="text-primary">•</span> {info}
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
                  style={{ padding: "1rem", backgroundColor: "rgba(0,0,0,0.3)", color: "white" }}
                >
                  {/* Title - Always Visible at Bottom */}
                  <h3 
                    className=" fw-bold"
                    style={{ 
                      fontSize: "1.5rem",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {project.title}
                  </h3>
                  
                  {/* Click Indicator */}
                  {!expandedCards[project.id] && (
                    <div>
                      <small className="text-light opacity-75">
                        Click to view details
                      </small>
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
