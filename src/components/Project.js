import React from 'react'
import Project1 from "../assets/project1.png"
import Project2 from "../assets/project2.png"
import "../style/projects.css"

export default function project() {
    return (
        <section className='main-project'>

            <div className="container">
                <h3 className='project-h3'><span>04.</span>Some Things I’ve Built</h3>
                <div className='box-project'>
                    <div className='bg-poject'>
                        <div className='bg'>
                            <div className='overlay'></div>
                            <img src={Project1} alt="" />
                        </div>
                    </div>
                    <div className='text-project'>
                        <i className='tag'>Featured Project</i>
                        <h2>EduCadamy</h2>
                        <div className='p-box'>
                            <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and .</p>
                        </div>
                        <div className='list-tools-used'>
                            <b>Vs Code</b> <b>HTML</b> <b>Bootstrap</b>
                            <b>JavasScript</b> <b>CSS</b> <b>API</b>
                        </div>
                        <div className='btn-project'>
                            <a href='https://github.com/JuneRhomel/MINI-PROJECT-2' target="_blank" rel="noopener noreferrer" class="fa-brands fa-github"></a>
                            <a href='https://educadamy.pages.dev/' target="_blank" rel="noopener noreferrer" class="fa-solid fa-arrow-up-right-from-square"></a>
                        </div>
                    </div>
                </div>

                <div className='box-project box-project2'>
                    <div className='bg-poject bg-poject2'>
                        <div className='bg'>
                            <div className='overlay'></div>
                            <img src={Project2} alt="" />
                        </div>
                    </div>
                    <div className='text-project text-project2'>
                        <i className='tag'>Featured Project</i>
                        <h2 className='h2-left'>Puff Tea</h2>
                        <div className='p-box'>
                            <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and .</p>
                        </div>
                        <div className='list-tools-used'>
                            <b>Vs Code</b> <b>HTML</b> <b>Bootstrap</b>
                            <b>JavasScript</b> <b>CSS</b> 
                        </div>
                        <div className='btn-project'>
                            <a href='https://github.com/JuneRhomel/mini-project' target="_blank" rel="noopener noreferrer" class="fa-brands fa-github"></a>
                            <a href='https://pufftea.pages.dev/'  target="_blank" rel="noopener noreferrer" class="fa-solid fa-arrow-up-right-from-square"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}