import React from "react";
import "./Hero.css";

const Hero = ({ HeroTitle, HeroBody, HeroSubtitle }) => {
    return(
        <div className="hero-container">
            <div className="left-hero-container">
                <div className="top-text-content">
                    <h1>{HeroTitle}</h1>
                    <h2>{HeroSubtitle}</h2>
                </div>
                <p>{HeroBody}</p>
            </div>
            <div className="right-hero-container">
            </div>
        </div>
    );
};

export default Hero;