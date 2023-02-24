import React from 'react'
import imge from "../assets/project2.png"

export default function ProjectList(props) {
        console.log(props.Tools)
    
    return (
        <div className='project-items'>
            <div className='links'>
                <a href={props.Github} target="_blank" rel="noopener noreferrer" class="fa-brands fa-github"></a>
                <a href={props.Link} target="_blank" rel="noopener noreferrer" class="fa-solid fa-arrow-up-right-from-square"></a>
            </div>
            <div className='box-image'>
                <img src={"http://localhost:3000/uploads/" + props.Image} alt="Project" />
            </div>
            <div className='text-items'>
                <h4>{props.Title}</h4>
                <p>{props.Description}</p>
            </div>
            <div className='tools'>
                {props.Tools.map(item => {
                    return (
                        <b key={Math.random()}>{item}</b>
                    )
                }) }
            </div>
        </div>
    )
}
