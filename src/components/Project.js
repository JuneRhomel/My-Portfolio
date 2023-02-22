import React from 'react'
import Project1 from "../assets/project1.png"
import Project2 from "../assets/project2.png"
import Project3 from "../assets/project3.png"
import "../style/projects.css"

export default function project() {
    return (
        <section className='main-project' id='Projects'>

            <div className="container">
                <h3 className='project-h3'><span>04.</span>Some Things I’ve Built</h3>
            <div className='flex-project'>
                <div data-aos="zoom-out">
                    <div className='box-project'  >
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
                                <p>An educational website that provides educational content, resources, and tools to users, typically with the goal of facilitating learning and knowledge acquisition. </p>
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

                </div>
                <div data-aos="zoom-out">
                    <div className='box-project ' >
                        <div className='bg-poject'>
                            <div className='bg'>
                                <div className='overlay'></div>
                                <img src={Project2} alt="" />
                            </div>
                        </div>
                        <div className='text-project text-project2'>
                            <i className='tag'>Featured Project</i>
                            <h2 className='h2-left'>Puff Tea</h2>
                            <div className='p-box'>
                                <p>A Ecommerce website milk tea, where you can browse and purchase a variety of delicious flavors and styles of milk tea, all from the comfort of your own home.</p>
                            </div>
                            <div className='list-tools-used'>
                                <b>Vs Code</b> <b>HTML</b> <b>Bootstrap</b>
                                <b>JavasScript</b> <b>CSS</b>
                            </div>
                            <div className='btn-project'>
                                <a href='https://github.com/JuneRhomel/mini-project' target="_blank" rel="noopener noreferrer" class="fa-brands fa-github"></a>
                                <a href='https://pufftea.pages.dev/' target="_blank" rel="noopener noreferrer" class="fa-solid fa-arrow-up-right-from-square"></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div data-aos="zoom-out">
                    <div className='box-project'  >
                        <div className='bg-poject'>
                            <div className='bg'>
                                <div className='overlay'></div>
                                <img src={Project3} alt="" />
                            </div>
                        </div>
                        <div className='text-project'>
                            <i className='tag'>Featured Project</i>
                            <h2>Soria</h2>
                            <div className='p-box'>
                                <p>A website where you can easily book a hotel room online with a few simple clicks, allowing you to reserve your desired accommodations and plan your trip with ease. </p>
                            </div>
                            <div className='list-tools-used'>
                            <b>Vs Code</b> <b>CSS</b> <b>React.js</b> <b>PHP</b><b>MySql</b><b>Rest API</b>
                            </div>
                            <div className='btn-project'>
                                <a href='https://github.com/SetSaito/hotel-booking' target="_blank" rel="noopener noreferrer" class="fa-brands fa-github"></a>
                                <a href='https://soria-hotel.web.app/' target="_blank" rel="noopener noreferrer" class="fa-solid fa-arrow-up-right-from-square"></a>
                            </div>
                        </div>
                    </div>

                </div>
                
                </div>
            </div>
        </section>
    )
}
