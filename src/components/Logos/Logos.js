import React from "react";
import "./Logos.css"
import { LogoData } from "../../data/LogosList"

const Logos = () => {
    return (
        <div className="logos-container">
            {LogoData.map((item, index) => {
                return (
                    <>
                        <img src={item.logo} alt="test"/>
                    </>
                );
            })}
        </div>
    );
};

export default Logos;