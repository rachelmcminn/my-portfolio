import React from "react";
import headshot from '../assets/img/headshot.jpg';

export const About = () => {

    return (
        <section id="about" className="content-section">
           <h1 className="section-title">// about me</h1>

           <div className="about-me-content">
            <img src={headshot} alt="Rachel McMinn" className="headshot"/>
                <div>
                <p>
                    I'm a front-end engineer that specializes in <b>building scalable UI systems and enhancing developer experience.</b> <br/>
                    I studied <b>Creative Technology and Design</b> at the <b>University of Colorado Boulder</b>, and went on to work <br/>
                    as a <b>software engineer and designer at a tech consulting startup in Denver</b>, where I got to wear a lot of hats <br/> 
                    and build a lot of different things. 
                    
                </p>

                <p>
                    Some technologies I've been working with lately:
                    <ul className="about-tech-stack">
                        <li>
                            - React
                        </li>
                        <li>
                            - Vite
                        </li>
                        <li>
                            - Node.js
                        </li>
                        <li>
                            - Javascript ES6+
                        </li>
                        <li>
                            - Typescript
                        </li>
                        <li>
                            - OutSystems
                        </li>
                        
                    </ul>
                </p>
            
                <p> Outside of work, I love <b>hiking, cooking, reading, and playing video games</b> (and sometimes <br/><b>streaming</b> them too!).</p>
          
                <a href="src/assets/files/Rachel_McMinn_Resume.pdf" target="_blank" rel="noreferrer" style={{marginRight:"16px"}}>
                    <button className="btn btn-primary">Current Resume</button>
                </a>
                <a href="mailto:racminn@gmail.com" target="_blank" rel="noreferrer">
                    <button className="btn btn-secondary">Say Hi</button>
                </a>
                </div>
           </div>
          
           
        </section>
    )
}