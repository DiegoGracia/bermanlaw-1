import React from "react";
import "./Schedule.css";

import img1 from "../../assets/Guy1.png"
import img2 from "../../assets/Guy2.png"

const Schedule = () => {
    return (
        <div className="schedule-container">
            <div className="left-container">
                <img src={img1} alt="guy1"/>
            </div>
            <div className="center-container">
                <h1>SOLICITA UNA CONSULTA GRATIS CON UN ABOGADO</h1>
                <p>Tu consulta inicial es gratis, y tenemos una
                política de ‘sin recuperación = no hay costo.’
                Llámanos hoy para recibir la mejor asesoría
                legal de nuestros mejores abogados.</p>
                <button>Clic Para Contactarnos</button>
            </div>
            <div className="right-container">
                <img src={img2} alt="guy1"/>
            </div>
        </div>
    );
};

export default Schedule;