import React from "react";
import Card from "../Card/Card"
import "./Section.css";
import { SectionData } from "../../data/SectionData"

const Section = () => {
    return (
        <div className="section-container">
            <div className="content">
                <div className="left-section">
                    <h1>When you need an attorney, you need one that gets real results</h1>
                    <div className="left-section-button-container">
                        <div className="dual-container">
                            <button type="button">FREE CASE EVALUATION</button> 
                        </div>
                    </div>              
                </div>
                <div className="right-section"> 
                    <div className="card-container">
                        {SectionData.map((item, index) => {
                            return (
                                <Card topText={item.topText} subText={item.subText}/>
                            );
                        })}
                    </div>             
                </div>
            </div>
        </div>
    );
};

export default Section;