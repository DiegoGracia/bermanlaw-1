import React from "react";
import "./Card.css"

const Card = ( {topText, subText, number} ) => {
    return(
        <div className="container">
            <h1>{topText}</h1>
            <h2>{number}</h2>
            <p>{subText}</p>
        </div>
    );
};

export default Card; 