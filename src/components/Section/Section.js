import React from "react";
import Card from "../Card/Card"
import "./Section.css";
import { SectionData } from "../../data/SectionData"

const Section = () => {
    return (
        <div className="section-container">
            <div className="content">
                <div className="left-section">
                    <h1>10XLAW.COM is powered</h1>
                    <h2>by Berman Law Group</h2>
                    <p>Handling injuries across Florida, to get you the money you deserve!</p>
                    <div className="left-section-button-container">
                        <div className="dual-container">
                            <button type="button">FREE EVALUATION</button> 
                        </div>
                    </div>              
                </div>
                <div className="right-section"> 
                    <div className="card-container">
                        {SectionData.map((item, index) => {
                            return (
                                <Card topText={item.topText} subText={item.subText} number={item.number}/>
                            );
                        })}
                    </div>             
                </div>
            </div>
        </div>
    );
};

export default Section;