import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  const skills = [
    { name: "React", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Node.js", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "HTML5", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Git", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "AWS", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "SQL", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" },
    // Data Engineering Skills
    { name: "Apache Airflow", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
    // { name: "Snowflake", svg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Snowflake_Computing_logo.png/300px-Snowflake_Computing_logo.png" },
    // { name: "dbt", svg: "https://avatars.githubusercontent.com/u/17461191?s=200&v=4" },
    { name: "Apache Spark", svg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/300px-Apache_Spark_logo.svg.png" },
    { name: "PostgreSQL", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Apache Kafka", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
    { name: "Docker", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Azure", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    // { name: "Power BI", svg: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Power_bi_logo_black.svg/300px-Power_bi_logo_black.svg.png" },
    { name: "Pandas", svg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/300px-Pandas_mark.svg.png" },
    { name: "NumPy", svg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/300px-NumPy_logo_2020.svg.png" }
  ];

  return (
    <div id="skills" className="container my-5 px-0">
      <h2 className="text-center mb-5 mt-4" style={{fontSize: '2rem', fontWeight: '300', color: '#000000'}}>My Skills</h2>
      
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
            <div 
              className="d-flex flex-column align-items-center justify-content-center p-3 position-relative"
              style={{
                minHeight: '120px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              title={skill.name}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-delay="200"
            >
              <img 
                src={skill.svg} 
                alt={skill.name}
                style={{
                  width: '60px',
                  height: '60px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  const tooltip = e.target.parentElement.querySelector('.tooltip-text');
                  if (tooltip) {
                    tooltip.style.opacity = '1';
                    tooltip.style.visibility = 'visible';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  const tooltip = e.target.parentElement.querySelector('.tooltip-text');
                  if (tooltip) {
                    tooltip.style.opacity = '0';
                    tooltip.style.visibility = 'hidden';
                  }
                }}
              />
              <div 
                className="tooltip-text"
                style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#333',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  whiteSpace: 'nowrap',
                  opacity: 0,
                  visibility: 'hidden',
                  transition: 'all 0.3s ease',
                  zIndex: 1000,
                  pointerEvents: 'none'
                }}
              >
                {skill.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;