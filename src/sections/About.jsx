import React from "react";
import headshot from '../assets/img/kity-close.jpg';

export const About = () => {

    return (
        <section id="about" className="content-section">
           <h1 className="section-title">// about me</h1>

           <div className="about-me-content">
            <img src={headshot} alt="headshot" className="headshot"/>
                <div>
                <p>
                cool empathic girl and smart code girl 
                </p>
                <p>
                i lovw 2 play games
                </p>
            
                <p> Outside of work, I love being outside, reading, spending time with family and friends, and playing video games (and streaming them too!)</p>
          
                <a href="mailto:racminn@gmail.com">
                    <button className="btn btn-primary">Say Hi</button>
                </a>
                <a href="">
                    <button className="btn btn-secondary">View Resume</button>
                </a>
                </div>
           </div>
          
           
        </section>
    )
}