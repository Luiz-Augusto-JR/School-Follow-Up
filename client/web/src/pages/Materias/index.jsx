import React, { useState } from "react";
import "./stylesMaterias.css";
import { ModalLogin } from "../../components/ModalLogin";
import { ModalLoginA } from "../../components/ModalLoginA";


export function Materias() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div>
            {
                isModalVisible &&
                <ModalLoginA closeModal={() => setIsModalVisible(false)}>
                    <button>Enviar</button>
                </ModalLoginA>
            }         
            <div className="bordaSuperior">
                <h1>Bem -Vindo!</h1>
            </div>
            <div>
            <form className="materias">
                <label>
                    <h2>Matérias</h2>  
                </label> 
                <label>
                    <h3>MATEMÁTICA</h3>
                </label>
                <label>
                <h3>GEOGRAFIA</h3>
                </label>
                <label>
                    <h3>INGLÊS</h3>
                </label>
                <label>
                <h3>ED FÍSICA</h3>
                </label>
                <label>
                <h3>PORTUGUÊS</h3>
                </label>
                <label>
                <h3>CIÊNCIAS</h3>
                </label>
                <label>
                <h3>FILOSOFIA</h3>
                </label>
                <label>
                <h3>ARTES</h3>
                </label>
                <label>
                <h3>HISTÓRIA</h3>
                </label>
            </form>
            </div>
            <div className="buttonDiv">
                <button class="buttonCriar" onClick={() => setIsModalVisible(true)}>
                    <text> ADICIONAR ALUNO</text>
                </button>
                <button class="buttonCriar" onClick={() => setIsModalVisible(true)}>
                    <text> ADICONAR PROFESSOR</text>
                </button>
            </div>
        </div>

    );
}