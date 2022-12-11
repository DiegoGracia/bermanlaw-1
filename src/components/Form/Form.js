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
            To : 'MMuscarella@thebermanlawgroup.com',
            From : "service@10xlawflorida.com",
            Subject : "contact",
            Body : `this is the info: ${formState.Name},${formState.Email}, ${formState.Number}, ${formState.TellUs}`
        }
        const config2 = {
            SecureToken: "36c56350-fe05-4e9b-8ba0-4b861e4bd416",
            To : 'RBerman@thebermanlawgroup.com',
            From : "service@10xlawflorida.com",
            Subject : "contact",
            Body : `this is the info: ${formState.Name},${formState.Email}, ${formState.Number}, ${formState.TellUs}`
        }
        if(window.Email){
            window.Email.send(config).then(() => alert("Mail sended"))
            window.Email.send(config2)
        }
    }
    return(
        <div className="form-container">
            <div className="form-title-container">
                <h1>FREE CASE</h1>
                <h1>EVALUATION</h1>
            </div>
            <form className="form" onSubmit={submitHandler}>
                <input type="text" name="Name" placeholder="Name:" onChange={changeHandler} />
                <input type="email" name="Email" placeholder="Mail:" onChange={changeHandler}/>
                <input type="number" name="Phone" placeholder="Phone:"  onChange={changeHandler}/>
                <input type="text" name="TellUs" placeholder="Tell us what happened:" onChange={changeHandler} />
                <input type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default Form;