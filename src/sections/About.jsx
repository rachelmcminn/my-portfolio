import React from "react";
import headshot from '../assets/img/headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

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
                            <div className="tech-stack-item">
                                <FontAwesomeIcon icon="fa-solid fa-caret-right" />React
                            </div>
                        </li>
                        <li>
                            <div className="tech-stack-item">
                                <FontAwesomeIcon icon="fa-solid fa-caret-right" />Vite
                            </div>
                        </li>
                        <li>
                            <div className="tech-stack-item">
                                <FontAwesomeIcon icon="fa-solid fa-caret-right" />Node.js
                            </div>
                        </li>
                        <li>
                            <div className="tech-stack-item">
                                <FontAwesomeIcon icon="fa-solid fa-caret-right" />Javascript ES6+
                            </div>
                        </li>
                        <li>
                            <div className="tech-stack-item">
                                <FontAwesomeIcon icon="fa-solid fa-caret-right" />Typescript
                            </div>
                        </li>
                        <li>
                            <div className="tech-stack-item">
                                <FontAwesomeIcon icon="fa-solid fa-caret-right" />Python
                            </div>
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