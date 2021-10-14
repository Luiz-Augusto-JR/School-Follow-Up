import React from "react";
import "./stylesHomeProfessores.css";
import gif from "../../assets/logoCortadaBranca.gif";


export function HomeProfessores() {
    return (
        <div>
            
            <div className="home-logo">
                <img src={gif} alt="logo" />
            </div>
            <div className="bordaSuperior">
                <h1>BEM-VINDO AO SCHOOL FOLLOW-UP!</h1>
            </div>
            <div className="qrcode">
                <h2>Escaneie o QRCODE para registrar presença na aula!

                </h2>
                <img src={gif} alt="logo" />

            </div>
        </div>
    );
}