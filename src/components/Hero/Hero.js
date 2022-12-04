import React from "react";
import "./Hero.css";

const Hero = ({ HeroTitle, HeroBody }) => {
    return(
        <div className="hero-container">
            <div className="left-hero-container">
                <h1>{HeroTitle}</h1>
                <p>{HeroBody}</p>
            </div>
            <div className="right-hero-container">
            </div>
        </div>
    );
};

export default Hero;