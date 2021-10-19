import React, { useEffect, useRef } from "react";
import "./stylesHomeProfessores.css";
import gif from "../../assets/logoCortadaBranca.gif";
import { api } from "../../services/api";
import QRCode from 'qrcode';
import { useAuth } from "../../contexts/AuthContext";


export function HomeProfessores() {    
    const canvasRef = useRef(null);
    const { authActions } = useAuth(); 

    useEffect(() => {   
        async function createQRCode() {
            try {
                const materia = (await api.get("/materias/professor"));

                if (materia) {
                    const frequencia = (await api.post("/frequencias/abrir-aula", { data: new Date(), materiaId: materia.id })).data;

                    QRCode.toDataURL(canvasRef.current, JSON.stringify(frequencia), (error) => {
                        console.log(error);
                    });
                }                
            } catch (error) {
                console.log(error);
            }
        }

        createQRCode();
    }, []);

    return (
        <div>
            <button onClick={() => authActions.signOut()}>Sair</button>
            <div className="home-logo">
                <img src={gif} alt="logo" />
            </div>
            <div className="bordaSuperior">
                <h1>BEM-VINDO AO SCHOOL FOLLOW-UP!</h1>
            </div>
            <div className="qrcode">
                <h2>Escaneie o QRCODE para registrar presença na aula!

                </h2>
                <canvas ref={canvasRef} />
            </div>
        </div>
    );
}