import React from "react";
import Card from "../Card/Card"
import "./Section.css";
import { SectionData } from "../../data/SectionData"

const Section = () => {

    const scroll = () => {
        window.scrollTo(0,100)
    }
    return (
        <div className="section-container">
            <div className="content">
                <div className="left-section">
                    <h1>10XLAW.COM está respaldado</h1>
                    <h2>por Berman Law Group</h2>
                    <p>¡Nos encargamos de lesiones en todo Florida para conseguirte el dinero que mereces!</p>
                    <div className="left-section-button-container">
                        <div className="dual-container">
                            <button onClick={() => scroll()} type="button">EVALUACIÓN GRATIS</button> 
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