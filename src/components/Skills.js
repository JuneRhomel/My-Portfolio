import React from 'react'

export default function Skills() {
    return (
        <section className='skills'>
            <div className="about">
                <h3><span>02.</span>Skills <svg width="308" height="1" viewBox="0 0 308 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.65" x2="308" y2="0.65" stroke="#CCD6F6" stroke-width="0.7" />
                </svg>
                </h3>
                <div className='skills-box'>
                    <h4>Client-side Programming</h4>
                    <ul>
                        <li>Responsive Web Design</li>
                        <li>JavaScript and the DOM Manipulation</li>
                        <li>Data Structures and Algorithms</li>
                        <li>Web APIs</li>
                        <li>React.js JavaScript Framework</li>
                    </ul>
                </div>
                <div className='skills-box'>
                    <h4>Server-side Programming</h4>
                    <ul>
                        <li>Database Design</li>
                        <li>Structured Query Language</li>
                        <li>XAMMP Server</li>
                        <li>PHP Object-oriented Programming</li>
                        <li>MVC Software Architecture</li>
                    </ul>
                </div>
                <div className='skills-box'>
                    <h4>Server Hosting</h4>
                    <ul>
                        <li>Web Server</li>
                        <li>Web Security</li>
                        <li>Cloud Computing</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
