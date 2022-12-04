import React from "react";
import "./Navbar.css"
import img from "../../assets/Logo.png"
import telefono from "../../assets/telefono.png"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <img src={img} alt="logo"/>
            <div className="number-section">
                <img src={telefono} alt="telefono" />
                <div className="phone-container">
                    <h1>561</h1>
                    <h1>453</h1>
                    <h1>1394</h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;