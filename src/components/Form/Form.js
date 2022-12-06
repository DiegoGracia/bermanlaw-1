import React from "react";
import "./Form.css"

const Form = () => {
    return(
        <div className="form-container">
            <div className="form-title-container">
                <h1>FREE CASE</h1>
                <h1>EVALUATION</h1>
            </div>
            <form className="form">
                <input type="text" id="fname" name="Name" placeholder="Name:" />
                <input type="text" id="femail" name="Email" placeholder="E-mail:" />
                <input type="number" id="fphone" name="Phone" placeholder="Phone:" />
                <input type="text" id="ftellus" name="TellUs" placeholder="Tell us what happened:" />
                <input type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default Form;