import React from "react";
import "./Schedule.css";

import img1 from "../../assets/Guy1.png"
import img2 from "../../assets/Guy2.png"

const Schedule = () => {
    return (
        <div className="schedule-container">
            <div className="left-container">
                <img src={img1} alt="guy1"/>
            </div>
            <div className="center-container">
                <h1>SCHEDULE A FREE CONSULTATION WITH AN ATTORNEY</h1>
                <p>Your initial consultation is free, and we have 
                a policy of ‘no recovery = no fee.’ Call us 
                today to get our best legal advice from our 
                best attorneys.</p>
                <button>Click to contact us</button>
            </div>
            <div className="right-container">
                <img src={img2} alt="guy1"/>
            </div>
        </div>
    );
};

export default Schedule;