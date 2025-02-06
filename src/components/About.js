import React from 'react'

const About=()=>{
    return (

        <div className="container d-flexcontainer ml-2 d-flex align-items-center justify-content-center min-vh-100 text-white">
            <div className="card" style={{
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "4px 4px 15px rgba(360, 0, 0, 0.1)", 
  textAlign: "center",
  
  margin: "auto",
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer"
}} 
  onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
  onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
                <div className="card-body" style={{fontFamily: "'Rajdhani', 'sans-serif'", color: '#333', lineHeight: "1.5"}}>
                    <h1 className='text-center'>ABOUT ME</h1>
                    <p style={{fontFamily: "'Rajdhani', 'sans-serif'", fontSize: '18px', color: '#333', lineHeight: "1.5"}}>
                    My journey began with a Bachelor’s in Computer Science, where I discovered my passion for web development, mastering HTML, CSS, JavaScript, and React. But everything changed when I worked on a data mining project, securing 4th place and uncovering my deep interest in data.

That passion led me to develop enterprise-grade applications in the Azure ecosystem, working extensively with Python and SQL for two years. I specialized in building scalable data pipelines and crafting insightful visualizations to turn raw data into meaningful insights.
<br />
Pursuing a Master’s in Data Analytics Engineering allowed me to refine my skills in big data, cloud technologies, and AI-driven solutions. Alongside my studies, I worked as a Teaching Assistant, helping students understand complex data concepts and grading assignments.

Now, I’m seeking a full-time role as a Data Engineer or Data Analyst, eager to build innovative data-driven solutions
<br /><br />
Let me know if you wanna connect—whether it's talking about building a new website or creating a data pipeline.  
      I love collaborating on new ideas and making things happen!
                    </p>
                </div>
            </div>
        </div>
    )
}


export default About


