import React from "react";
import spadeBlue from '../assets/img/spade-blue.png';

<img src={spadeBlue} alt="Spade Blue" />

export const Home = () => {


    return (
        <section id="home">
            <img src={spadeBlue} alt="Spade Blue"/>
            <div className="page-title">hi, i'm rachel</div> 
            <div className="page-subtitle">engineer & creative technologist</div>

            <div className="home-text">
                I'm a problem solver at heart and a lifelong observer of human nature. I strive to create online spaces that are well designed, accessible and enjoyable to experience. 
            </div>
            
           
        </section>
    )

    

}