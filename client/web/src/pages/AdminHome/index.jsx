import React, { useState } from "react";
import "./stylesAdminHome.css";
import gif from "../../assets/logoCortadaBranca.gif";
import { ModalLoginAluno } from "../../components/ModalLoginAluno";
import { ModalLoginProfessor } from "../../components/ModalLoginProfessor";
import { ModalCriarNotaAluno } from "../../components/ModalCriarNotaAluno";
import { ModalCadastrarMateria } from "../../components/ModalCadastrarMateria";
import { useAuth } from "../../contexts/AuthContext";



export function AdminHome() {
    const [isModalLoginAlunoVisible, setIsModalLoginAlunoVisible] = useState(false);
    const [isModalLoginProfessorVisible, setIsModalLoginProfessorVisible] = useState(false);
    const [isModalCriarNotaAlunoVisible, setIsModalCriarNotaAlunoVisible] = useState(false);
    const [isModalCriarMateriaVisible, setIsModalCriarMateriaVisible] = useState(false);
    const { authActions } = useAuth(); 

    

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

            {
                isModalCriarMateriaVisible &&
                <ModalCadastrarMateria closeModal={() => setIsModalCriarMateriaVisible(false)} />                    

            }
            <div className="bordaSuperior">
                <h1>BEM-VINDO AO SCHOOL FOLLOW-UP!</h1>
            </div>
            <button className="sair" onClick={() => authActions.signOut()}>Sair</button>
            <div className="divMaterias">
                <button className="buttonCriar" onClick={() => setIsModalLoginProfessorVisible(true)}>
                    CRIAR LOGIN PROFESSORES
                </button>
                <button className="buttonCriar" onClick={() => setIsModalLoginAlunoVisible(true)}>
                   CRIAR LOGIN ALUNOS
                </button>
                <button className="buttonCriar" onClick={() => setIsModalCriarNotaAlunoVisible(true)}>
                    ADICIONAR NOTAS
                </button>
                <button className="buttonCriar" id="demo" onClick={() => setIsModalCriarMateriaVisible(true)}>CRIAR MATÉRIA</button>
            </div>
            <div className="home-logo">
                <img src={gif} alt="logo" />
            </div>
        </div>

    );
}