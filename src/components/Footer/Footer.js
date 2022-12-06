import React from "react";
import "./Footer.css"
import img from "../../assets/LogoBlanco.png"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="left-side">
                <p>© 2022 Copyright Berman Law Firm, all rights reserved.</p>
                <p><a href="https://www.bermanlawgroup.com/privacy-policy/">privacy policy</a></p>
                <p>“Berman Law Group provides a range of legal services from our offices throughout Florida, as well as in California, Washington, D.C. and through
affiliates in the rest of the United States. Our team of experienced trial attorneys are prepared to provide you with the qualified legal
representation you need and are committed to working tirelessly to get you everything you deserve. We are committed to being available 24/7 by
phone, so we can help you wherever you are and whenever you want to talk."</p>
                <p>** Contact the firm for detailed information on this statement. These claims collectively represent all Berman attorneys over the course of their
legal careers. The amounts listed for cases represent gross verdicts, collections and settlements obtained on behalf of clients collectively by all
firm attorneys over their legal careers, without adjustment for fees, costs, or medical liens. Accounts of collected verdicts, collections and
settlements contained on this website are intended to illustrate the experience of the firm in a variety of areas. Each case is unique, and the
results in one case do not necessarily indicate the quality or value of any other case.</p>
            </div>
            <div className="right-side">
                <img src={img} alt="pending"/>
                <button>Clic Para Contactarnos</button>
            </div>
        </div>
    );
};

export default Footer;