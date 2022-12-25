import React from 'react'
import HTML from "../assets/html.svg"
import css from "../assets/css.svg"
import js from "../assets/js.svg"
import react from "../assets/react.svg"
import bootstrap from "../assets/bootstrap.svg"
import xammp from "../assets/xampp1.svg"
import php from "../assets/php.svg"
import mysql from "../assets/mysql.svg"
import github from "../assets/github.svg"
import figma from "../assets/figma.svg"
import laravel from "../assets/laravel.svg"

const logo = [
    {
        imgLogo: HTML,
        text: "HTML"
    },
    {
        imgLogo: css,
        text: "CSS"
    },
    {
        imgLogo: js,
        text: "JavaScript"
    },
    {
        imgLogo: react,
        text: "React.js"
    },
    {
        imgLogo: bootstrap,
        text: "Bootstrap"
    },
    {
        imgLogo: xammp,
        text: "xampp"
    },
    {
        imgLogo: php,
        text: "Php"
    },
    {
        imgLogo: mysql,
        text: "MySQL"
    },
    {
        imgLogo: github,
        text: "Git Hub"
    },
    {
        imgLogo: figma,
        text: "Figma"
    },
    {
        imgLogo: laravel,
        text: "Laravel"
    },
]





export default function Tools() {

    const listlogo = logo.map((item) => {
        return (
            <div className='logo'key={item.text}>
                <img  src={item.imgLogo} alt="" />
                <p>{item.text}</p>
            </div>
            )
    })
    return (
        <div className='logo-box'data-aos="fade-right">
            <h3><span>02.</span>Tools I Used <svg viewBox="0 0 308 1" fill="none">
                    <line y1="0.65" x2="308" y2="0.65" stroke="#CCD6F6" stroke-width="0.7" />
                </svg>
            </h3>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <div className='tools-logo'>
                {listlogo}
            </div>
        </div>
    )
}
