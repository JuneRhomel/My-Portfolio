import React, { useEffect, useState } from 'react'
import "../style/Allproject.css"
import ProjectList from './ProjectList'
export default function Allproject() {
  const [project, setProject] = useState([]);
  useEffect(() => {
      async function getRepos() {
          const response = await fetch('http://localhost:3000/API.php');
          const repos = await response.json();
          setProject(repos);
      }
      getRepos();
  }, []);
  // alert(project.length)
  return (
    <>
    {project.length >= 5?
      <section className='ProjectAll' id='ProjectAll'>
      <div className="container">
          <i className='tag'>Featured Project</i>
          <h2>My Projects</h2>
  
          <div className='main-project'>
  
          <div className='blur blur1'></div>
          <div className='blur blur2'></div>
          <div className='project-list'>
            {project.map(item => {
              return (
                  <ProjectList {...item} key={item.PID}/>
              )
            })}
              
          </div>
          </div>
      </div>
  
  </section>
  :
  ""
    }
    </>

  )
}
