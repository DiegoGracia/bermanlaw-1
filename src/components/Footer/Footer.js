import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="image-container">
                <div className="privacy-policy">
                    <p>© 2022. 10xlaw.com. All Rights Reserved.</p>
                    <p>10xlaw.com is powered by Berman Law Group</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="case-text">
                    <h1>DO YOU HAVE A CASE?</h1>
                    <p>SUBMIT YOUR POTENTIAL CLAIM IN A FEW CLICKS.</p>
                    <button>CLIC TO CONTACT US</button>
                    <h2>10xlaw</h2>
                </div>
                <div className="empty-side"></div>
            </div>
        </div>
    );
};

export default Footer;