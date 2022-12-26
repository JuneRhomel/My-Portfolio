import React from 'react'
import "../style/footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="contaner">
                <div className='footer-container'>
                    <div className='social-footer'>
                        <a href='https://www.facebook.com/junerhomel.mandigma.3/' target="_blank" rel="noopener noreferrer" class="fa-brands fa-facebook-f"></a>
                        <a href='https://github.com/JuneRhomel' target="_blank" rel="noopener noreferrer" class="fa-brands fa-github"></a>
                        <a href='https://www.instagram.com/junerhomelmandigma/' target="_blank" rel="noopener noreferrer" class="fa-brands fa-instagram"></a>
                        <a href='https://www.linkedin.com/in/june-rhomel-mandigma-69859a175/'target="_blank" rel="noopener noreferrer" class="fa-brands fa-linkedin-in"></a>
                        </div>
                    <div>
                        <h3>Designed & Built by <span>June Rhomel</span></h3>
                    </div>
                    <div className='used'>
                        <small>React.js</small>
                        <small>CSS</small>
                    </div>
                    <div><a href="https://github.com/JuneRhomel/My-Portfolio" target="_blank" rel="noopener noreferrer"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75008 20.5832C4.33341 22.2082 4.33341 17.8749 2.16675 17.3332M17.3334 23.8332V19.6407C17.3741 19.1242 17.3043 18.6048 17.1287 18.1173C16.9531 17.6298 16.6758 17.1853 16.3151 16.8132C19.7167 16.4341 23.2917 15.1449 23.2917 9.22989C23.2915 7.71737 22.7097 6.26286 21.6667 5.16739C22.1606 3.84411 22.1257 2.38144 21.5692 1.08323C21.5692 1.08323 20.2909 0.704058 17.3334 2.68656C14.8504 2.01362 12.2331 2.01362 9.75008 2.68656C6.79258 0.704058 5.51425 1.08323 5.51425 1.08323C4.95782 2.38144 4.9229 3.84411 5.41675 5.16739C4.36605 6.27098 3.78365 7.73864 3.79175 9.26239C3.79175 15.1341 7.36675 16.4232 10.7684 16.8457C10.412 17.214 10.1371 17.6532 9.96167 18.1348C9.78621 18.6164 9.71412 19.1295 9.75008 19.6407V23.8332" stroke="#8892B0" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </a></div>
                </div>
            </div>
        </footer>
    )
}
