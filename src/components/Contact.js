import React from 'react'
import "../style/contact.css"
export default function Contact() {
    return (
        <section className='contact-section'  data-aos="fade-up" id='Contact'>
            <div className="container">
                <div className='contact-container'>
                    <i className='tag'><span>05.</span> What’s Next?</i>
                    <h2>Get In Touch</h2>
                </div>
                <div className='text-contact'>
                    <p>I'm getting in touch to let you know that I'm currently searching for a new opportunity as a Web developer Front end, Back end or Full stack. If you are interested in my service. My inbox is always open. </p>
                    <div>
                        <a href='mailto:junemandigma@gmail.com'><button>Say Hello!</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
