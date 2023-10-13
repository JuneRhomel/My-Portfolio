import React from 'react'
import "../style/footer.css"
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className="contaner">
                <div className='footer-container'>
                    <div className='social-footer'>
                        <a href='https://www.facebook.com/junerhomel.mandigma.3/' target="_blank" rel="noopener noreferrer" className="fa-brands fa-facebook-f"></a>
                        <a href='https://github.com/JuneRhomel' target="_blank" rel="noopener noreferrer" className="fa-brands fa-github"></a>
                        <a href='https://www.instagram.com/junerhomelmandigma/' target="_blank" rel="noopener noreferrer" className="fa-brands fa-instagram"></a>
                        <a href='https://www.linkedin.com/in/june-rhomel-mandigma-69859a175/' target="_blank" rel="noopener noreferrer" className="fa-brands fa-linkedin-in"></a>
                    </div>
                    <div>
                        <h3>Designed & Built by <span>June Rhomel</span></h3>
                    </div>
                    <div className='used'>
                        <small>React.js</small>
                        <small>CSS</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}
