import React from "react";
import "./styles.css";
import gif from "../../assets/logoCortadaBranca.gif";


export function HomeProfessores() {
    return (
        <div>
            
            <div className="home-logo">
                <img src={gif} alt="logo" />
            </div>

            <div className="qrcode">
                <h1>BEM-VINDO!

                </h1>
                <h2>Escaneie o QRCODE para registrar presença na aula!

                </h2>
                <img src={gif} alt="logo" />

            </div>
        </div>
    );
}