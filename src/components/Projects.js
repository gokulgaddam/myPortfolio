import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub } from "react-icons/fa";
import F1Image from "../assets/F1.png";
import DNS from "../assets/dnssec.png";
import DBMS from "../assets/dbms.png";
import pb1 from "../assets/pb1_customer.jpg";
import pb2 from "../assets/pb2.jpg";
import cdc from "../assets/cdc.png"
const projects = [
  { id: 1, title: "Formula 1",
    image: F1Image,
    github: "", 
    info:["Developed and coded an ETL pipeline using Azure Databricks and automated the jobs using Data Pipelines (ADF) using Azure Synapse, analyzing and visualizing Formula-1 race data."
 , "Utilized PowerBI for in-depth data visualization and analysis, providing actionable insights into race performances and trends."]},
  { id: 2, title: "DNSSEC server analysis", 
    image: DNS, 
    github: "https://github.com/dhanya0509/DNSSEC_Impact_Analysis",
    info:["Developed scalable data pipelines in MariaDB using Amazon EMR, optimizing Spark and SQL queries to reduce data processing times by40%",
      "Collaborated in an Agile team using YouTrack, delivering secure and efficient pipelines for DNSSEC data analysis in Indonesia.",
      "Ensured data compliance and security for the GMU CARE MSL database, enabling reliable insights for decision-making."
    ]},
  { id: 3, title: "Hospital DBMS", 
    image: DBMS, 
    github: "https://github.com/gokulgaddam/Hospital-DBMS",
    info:["Developed a housing price prediction model using XGBoost and data modeling techniques, achieving a root mean square error(RMSE) of 70,000, demonstrating accuracy in predictive analytics, accounting principles, and design analysis capabilities forcampus-level applications.",
      "Performed feature engineering and data preprocessing, optimizing model performance by identifying key variables influencing using prices"
    ] },
    { id: 4, title: "Customer Feedback Dashboard ", 
      image: pb1, 
      github: "",
      info:["Developed an interactive Power BI dashboard to analyze customer feedback, integrating multiple data sources for real-time insights",
        "Designed engaging visualizations using bar charts, pie charts, and trend analysis graphs, enhancing data storytelling"
      ] },
      { id: 5, title: "Sales Dashboard ", 
        image: pb2, 
        github: "",
        info:["Developed an interactive Power BI Sales Dashboard to track sales performance across products and regions, enhancing business decision-making.",
          "Integrated and transformed raw sales data to calculate Total After Discount for each product, ensuring accurate revenue insights."
        ] },
        { id: 6, title: "CDC of mock data", 
          image: cdc, 
          github: "",
          info:["Built a real-time data pipeline using Kafka, Zookeeper, and Debezium to capture changes from a PostgreSQL database",
            "Configured Kafka topics and consumer groups to efficiently process and stream insert, update, and delete events.",
            "Tested the pipeline with mock CDC data, ensuring smooth event flow, data accuracy, and system reliability"
          ] }

];



const Projects = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 mt-4 text-light">My Projects</h2>
      <div className="row ">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mt-4">
            <div className="card w-100 shadow-lg border-2" style={{maxHeight:"26rem"}}>
              <img src={project.image} className="card-img-top img-fluid " style={{maxHeight:"10rem"}} alt={project.title} />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title">{project.title}</h5>
                <div className="card-text" style={{ maxHeight: "10rem", overflowY: "auto" }}>
                    <b>Gist of the project</b>  
                    <br />

                    <ul className="list-group list-group-flush">
                      {project.info.map((i, index) => (
                        <li key={index} className="list-group-item disabled text-wrap">{i}</li>
                      ))}
                    </ul>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="">
                        <FaGithub />
                      </a>
            
                    )}
                  
                  
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
