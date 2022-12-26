import React from 'react'
import "../style/hero.css"
import HeroImg from "../assets/hero.png"


export default function Hero() {
    return (
        <section>
        <div className='container'>
            <div className='hero'>

                <div className='hero-text' data-aos="fade-right">
                    <i className='tag'>Hi, my name is</i>
                    <h1>JUNE RHOMEL</h1>
                    <h2>I build things for the web.</h2>
                    <p>I am a full stack web developer with experience in front-end and back-end development, including technologies such as HTML, CSS, JavaScript, and various programming languages and frameworks.</p>
                    <a href="#List"><button className='btn-hero'>Check out my works</button></a>
                </div>
                <div className='img-box-hero' data-aos="fade-left">
                    <img src={HeroImg} alt="" />
                </div>
            </div>
            </div>
        </section>
    )
}
