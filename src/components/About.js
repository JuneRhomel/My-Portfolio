import "../style/about.css"

const target = document.querySelectorAll(".scroll")

export default function About() {


    return (
        <section className="about-section" data-aos="fade-right" id="About">

            <div className="about">
                <h3><span>01.</span>About Me  <svg viewBox="0 0 308 1" fill="none">
                    <line y1="0.65" x2="308" y2="0.65" stroke="#CCD6F6" strokeWidth="0.7" />
                </svg>
                </h3>
                <p>Hi, my name is <span>June Rhomel</span>  and I am a <span>full stack web developer</span>  with experience in both front-end and back-end development. <br /> <br /> I have a strong foundation in <span>HTML</span> , <span>CSS</span> , <span> JavaScript</span>, <span>SASS</span> and <span>React.js</span> for building user interfaces, as well as experience with various programming languages and frameworks for back-end development, such as <span>PHP</span>  and <span>Laravel</span> . <br /><br /> I am skilled in developing and maintaining web applications from start to finish, including <span>designing</span> , and implementing <span>database structures</span> , integrating <span>APIs</span> , and <span> testing and debugging code</span>. <br /><br /> I have a passion for <span>problem-solving</span>  and am always looking for ways to improve my skills and stay up to date with the latest technologies. I am excited to bring my full stack development skills to new projects and help bring them to successful completion.</p>
            </div>
            <div className="bg-txt">
                <h1 className="h1-bg bg-2 scroll">Full Stack</h1>
                <h1 className="h1-bg">Developer</h1>
            </div>
        </section>
    )
}
