import "../style/about.css"


// let path = document.querySelector('path');
// let pathLength = path.getTotalLength();

// path.style.strokeDasharray = pathLength + " "+ pathLength;
// path.style.strokeDashoffset =pathLength;

// window.addEventListener("scroll", ()=> {
//     let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight -document.documentElement.clientHeight);

//     let drawLength = pathLength * scrollPercentage;

//     path.style.strokeDasharray = pathLength - drawLength;
// })

export default function About() {


    return (
        <section className="about-section"  data-aos="fade-right">

            <div className="about">
                <h3><span>01.</span>About Me  <svg viewBox="0 0 308 1" fill="none">
                    <line y1="0.65" x2="308" y2="0.65" stroke="#CCD6F6" stroke-width="0.7" />
                </svg>
                </h3>
                <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
            </div>
        </section>
    )
}
