import React from 'react'
import imge from "../assets/project2.png"

export default function ProjectList() {
    return (
        <div className='project-items'>
            <div className='links'>
                <a href='' target="_blank" rel="noopener noreferrer" class="fa-brands fa-github"></a>
                <a href='' target="_blank" rel="noopener noreferrer" class="fa-solid fa-arrow-up-right-from-square"></a>
            </div>
            <div className='box-image'>
                <img src={imge} alt="" />
            </div>
            <div className='text-items'>
                <h4>DevX Film</h4>
                <p>A static website that you can see all the trending Movie, Tv series, anime. Built with HTML, CSS Bootstrap </p>
            </div>
            <div className='tools'>
                <b>Bootstrap</b>
                <b>Bootstrap</b>
                <b>Bootstrap</b>
            </div>
        </div>
    )
}
