import Logo from "../assets/Group 8.svg"
import "../style/navigation.css"

export default function Navbar() {
    return (
        <header >
            <div className="container">
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
                </nav>

            </div>
        </header>
    )
}
