import React, { useState } from "react";
import "./stylesAdminHome.css";
import gif from "../../assets/logoCortadaBranca.gif";
import { ModalLogin } from "../../components/ModalLogin";


export function AdminHome() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div>
            {
                isModalVisible &&
                <ModalLogin closeModal={() => setIsModalVisible(false)}>
                    <button>Enviar</button>
                </ModalLogin>
            }              
            <div className="bordaSuperior">
                <h1>Bem -Vindo!</h1>
            </div>
            <div className="buttonDiv">
                <button class="buttonCriar" onClick={() => setIsModalVisible(true)}>
                    <text> CRIAR LOGIN ALUNOS</text>
                </button>
                <button class="buttonCriar" onClick={() => setIsModalVisible(true)}>
                    <text> CRIAR LOGIN PROFESSORES</text>
                </button>
            </div>
            <div className="divMaterias">
                <button class="buttonMaterias"><text>MATÉRIAS</text></button>
            </div>
            <div className="home-logo">
                <img src={gif} alt="logo" />
            </div>
        </div>

    );
}