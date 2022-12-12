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
            To : 'RBerman@thebermanlawgroup.com',
            From : "service@10xlawflorida.com",
            Subject : "contact",
            Body : `this is the info: ${formState.Name},${formState.Email}, ${formState.Number}, ${formState.TellUs}`
        }
        if(window.Email){
            window.Email.send(config).then(() => window.location.href="https://10xlaw.com/")
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