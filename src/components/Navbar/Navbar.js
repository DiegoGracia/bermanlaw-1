import React from "react";
import "./Navbar.css"
import img from "../../assets/Logotipo10xlaw.png"
import telefono from "../../assets/telefono.png"

const Navbar = () => {
    const trackingPhoneClick = () => {
        var CONVERSION_STAGE = '1';
        window.trackingConversion(CONVERSION_STAGE); 
    }
    return (
        <div className="navbar-container">
            <img src={img} alt="logo"/>
            <div className="number-section">
                <img src={telefono} alt="telefono" />
                <div className="phone-container">
                    <a href="tel:8669419393"  onClick={trackingPhoneClick}>
                    <h1>(866)</h1>
                    <h1>941</h1>
                    <h1>9393</h1>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;