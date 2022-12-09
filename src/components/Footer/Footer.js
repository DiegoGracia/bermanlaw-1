import React from "react";
import "./Footer.css"

const Footer = () => {
    const scroll = () => {
        window.scrollTo(0,100)
    }
    return (
        <div className="footer-container">
            <div className="image-container">
                <div className="privacy-policy">
                    <p>© 2022. 10xlaw.com. All Rights Reserved.</p>
                    <p>10xlaw.com is powered by Berman Law Group</p>
                    <p><a href="https://www.bermanlawgroup.com/privacy-policy/">Privacy Policy</a></p>
                </div>
                <div className="case-text">
                    <h1>DO YOU HAVE A CASE?</h1>
                    <p>SUBMIT YOUR POTENTIAL CLAIM IN A FEW CLICKS.</p>
                    <button onClick={() => scroll()} >CLIC TO CONTACT US</button>
                    <h2>10xlaw</h2>
                </div>
                <div className="empty-side"></div>
            </div>
        </div>
    );
};

export default Footer;