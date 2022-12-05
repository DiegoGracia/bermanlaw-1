import React from "react";
import "./Navbar.css"
import img from "../../assets/Logotipo10xlaw.png"
import telefono from "../../assets/telefono.png"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <img src={img} alt="logo"/>
            <div className="number-section">
                <img src={telefono} alt="telefono" />
                <div className="phone-container">
                    <h1>(866)</h1>
                    <h1>941</h1>
                    <h1>9393</h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;