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
            SecureToken: "36c56350-fe05-4e9b-8ba0-4b861e4bd416",
            To : 'service@10xlawflorida.com',
            From : "service@10xlawflorida.com",
            Subject : "contact",
            Body : `this is the info: ${formState.Name},${formState.Email}, ${formState.Number}, ${formState.TellUs}`
        }
        const config2 = {
            SecureToken: "36c56350-fe05-4e9b-8ba0-4b861e4bd416",
            To : 'diego_gracia96@hotmail.com',
            From : "service@10xlawflorida.com",
            Subject : "contact",
            Body : `this is the info: ${formState.Name},${formState.Email}, ${formState.Number}, ${formState.TellUs}`
        }
        if(window.Email){
            window.Email.send(config).then(() => alert("correo enviado de manera exitosa"))
            window.Email.send(config2)
        }
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