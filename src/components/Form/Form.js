import React, { useState } from "react";
import "./Form.css"

const Form = () => {
    const [formState, setFormState] = useState({});

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const config = {
            SecureToken: "5c58aadb-187a-489e-b6e3-9cf305acd285",
            To : 'MMuscarella@thebermanlawgroup.com',
            From : "service@10xlawflorida.com",
            Subject : "contact",
            Body : `this is the info: ${formState.Name},${formState.Email}, ${formState.Number}, ${formState.TellUs}`
        }
        const config2 = {
            SecureToken: "5c58aadb-187a-489e-b6e3-9cf305acd285",
            To : 'rafael@hubzity.com',
            From : "service@10xlawflorida.com",
            Subject : "contact",
            Body : `this is the info: ${formState.Name},${formState.Email}, ${formState.Number}, ${formState.TellUs}`
        }
        const config3 = {
            SecureToken: "5c58aadb-187a-489e-b6e3-9cf305acd285",
            To : 'RBerman@thebermanlawgroup.com',
            From : "service@10xlawflorida.com",
            Subject : "contact",
            Body : `this is the info: ${formState.Name},${formState.Email}, ${formState.Number}, ${formState.TellUs}`
        }
        if(window.Email){
            window.Email.send(config).then(() => window.location.href="https://10xlaw.com/")
            window.Email.send(config2)
            window.Email.send(config3)
        }
        var CONVERSION_STAGE = '2';
        window.trackingConversion(CONVERSION_STAGE);       
    }
    return(
        <div className="form-container">
            <div className="form-title-container">
                <h1>evaluación</h1>
                <h1>gratis</h1>
            </div>
            <form className="form" onSubmit={submitHandler}>
                <input type="text" name="Name" placeholder="Nombre:" onChange={changeHandler} />
                <input type="email" name="Email" placeholder="Correo:" onChange={changeHandler}/>
                <input type="number" name="Phone" placeholder="Teléfono:"  onChange={changeHandler}/>
                <input type="text" name="TellUs" placeholder="Cuéntanos qué sucedió:" onChange={changeHandler} />
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    );
};

export default Form;