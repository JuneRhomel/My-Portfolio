import Logo from "../assets/Group 8.svg"
import "../style/navigation.css"

export default function Navbar() {
    const navBTn = ()=> {
        document.getElementById("bar-btn1").classList.toggle("barRotate1")
        document.getElementById("bar-btn2").classList.toggle("barRotate2")
        document.querySelector(".menu").classList.toggle("active-menu")
        document.querySelector("body").classList.toggle("body-hidden")
    }



    return (
        <header >
            <div className="container-nav">
                <nav className="navigation">
                    <a>
                        <img src={Logo} alt="J.R LOGO" />
                    </a>
                <div className="menu">
                    <ul className="manu-nav">
                        <li><a href=""><span className="number">01.</span>About</a></li>
                        <li><a href=""><span className="number">02.</span>Skills</a></li>
                        <li><a href=""><span className="number">03.</span>Projects</a></li>
                        <li><a href=""><span className="number">04.</span>Contact</a></li>
                    </ul>
                    <button className="btn-resume">Resume</button>
                </div>
                    <div className="menu-btn" onClick={navBTn} id="menu-btn">
                        <div className="bar " id="bar-btn1"></div>
                        <div className="bar"></div>
                        <div className="bar " id="bar-btn2"></div>
                    </div>
                        
                </nav>

            </div>
        </header>
    )
}
