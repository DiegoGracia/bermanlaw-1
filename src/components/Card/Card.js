import React from "react";
import "./Card.css"

const Card = ( {topText, subText } ) => {
    return(
        <div className="container">
            <h1>{topText}</h1>
            <p>{subText}</p>
        </div>
    );
};

export default Card; 