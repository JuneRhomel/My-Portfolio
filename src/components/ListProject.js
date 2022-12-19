import React from 'react'
import Github from "./Github"
import "../style/listProject.css"


export default function ListProject() {
    return (
        <section className='list-project'>
            <div className="container">
                <i className='tag'>Featured Project</i>
                <h2>My GitHub Repositories</h2>

                <div className='box-list'>
                    <Github />
                </div>
            </div>
        
        </section>
    )
}
