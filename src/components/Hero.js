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
                    <p>I’m a Full Stack Web Developer in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
                    <button className='btn-hero'>Check out my works</button>
                </div>
                <div className='img-box-hero' data-aos="fade-left">
                    <img src={HeroImg} alt="" />
                </div>
            </div>
            </div>
        </section>
    )
}
