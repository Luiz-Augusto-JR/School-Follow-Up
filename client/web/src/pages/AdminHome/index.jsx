import React, { useState } from "react";
import "./stylesAdminHome.css";
import gif from "../../assets/logoCortadaBranca.gif";
import { ModalLoginAluno } from "../../components/ModalLoginAluno";
import { ModalLoginProfessor } from "../../components/ModalLoginProfessor";
import { ModalCriarNotaAluno } from "../../components/ModalCriarNotaAluno";



export function AdminHome() {
    const [isModalLoginAlunoVisible, setIsModalLoginAlunoVisible] = useState(false);
    const [isModalLoginProfessorVisible, setIsModalLoginProfessorVisible] = useState(false);
    const [isModalCriarNotaAlunoVisible, setIsModalCriarNotaAlunoVisible] = useState(false);

        

    

    return (
        <div>
            {
                isModalLoginAlunoVisible &&
                <ModalLoginAluno closeModal={() => setIsModalLoginAlunoVisible(false)}>
                    <button>Enviar</button>
                </ModalLoginAluno>
            }             
            {
                isModalLoginProfessorVisible &&
                <ModalLoginProfessor closeModal={() => setIsModalLoginProfessorVisible(false)}>
                    <button>Enviar</button>
                </ModalLoginProfessor>
            }        
            {
                isModalCriarNotaAlunoVisible &&
                <ModalCriarNotaAluno closeModal={() => setIsModalCriarNotaAlunoVisible(false)}>
                    <button>Enviar</button>
                </ModalCriarNotaAluno>
            }   
            <div className="bordaSuperior">
                <h1>BEM-VINDO AO SCHOOL FOLLOW-UP!</h1>
            </div>
            <div className="divMaterias">
                <button class="buttonCriar" onClick={() => setIsModalLoginAlunoVisible(true)}>
                    <text> CRIAR LOGIN ALUNOS</text>
                </button>
                <button class="buttonCriar" onClick={() => setIsModalLoginProfessorVisible(true)}>
                    <text> CRIAR LOGIN PROFESSORES</text>
                </button>
                <button class="buttonCriar" onClick={() => setIsModalCriarNotaAlunoVisible(true)}>
                    <text> ADICIONAR NOTAS</text>
                </button>
                <button class="buttonCriar" id="demo"><text>MATÉRIAS</text></button>
            </div>
            <div className="home-logo">
                <img src={gif} alt="logo" />
            </div>
        </div>

    );
}