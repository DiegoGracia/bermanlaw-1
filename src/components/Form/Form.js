import React from "react";
import "./Form.css"

const Form = () => {
    return(
        <div className="form-container">
            <div className="form-title-container">
                <h1>evaluación</h1>
                <h1>gratis</h1>
            </div>
            <form className="form">
                <input type="text" id="fname" name="Name" placeholder="Name:" />
                <input type="text" id="femail" name="Email" placeholder="Email:" />
                <input type="number" id="fphone" name="Phone" placeholder="Phone:" />
                <input type="text" id="ftellus" name="TellUs" placeholder="Cuéntanos qué sucedió:" />
                <input type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default Form;