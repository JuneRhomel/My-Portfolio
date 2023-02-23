import React from 'react'
import "../style/Allproject.css"
import ProjectList from './ProjectList'
export default function Allproject() {
  return (
    <section className='ProjectAll' id='ProjectAll'>
    <div className="container">
        <i className='tag'>Featured Project</i>
        <h2>My Projects</h2>

        <div className='main-project'>

        <div className='blur blur1'></div>
        <div className='blur blur2'></div>
        <div className='project-list'>
            <ProjectList/>
            <ProjectList/>
            <ProjectList/>
            <ProjectList/>
            <ProjectList/>
            <ProjectList/>
            
        </div>
        </div>
    </div>

</section>
  )
}
