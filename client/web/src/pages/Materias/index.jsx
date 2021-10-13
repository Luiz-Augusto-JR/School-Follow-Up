import React, { useEffect, useState } from "react";
import "./stylesMaterias.css";
import { ModalLogin } from "../../components/ModalLogin";
import { ModalLoginA } from "../../components/ModalLoginA";
import { api } from "../../../../aplicativo/services/api";


export function Materias() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalAlunoVisible, setIsModalVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [materias, setMaterias] = useState([
        { 
            id: 1, 
            nome: "Matematica", 
            alunos: [
                { id: 1, nome: "Aluno 01" },
                { id: 2, nome: "Aluno 02" },
            ], 
            professor: { id: 1, nome: "Professor"}
        },
        { 
            id: 2, 
            nome: "Geografia", 
            alunos: [
                { id: 1, nome: "Aluno 01" },
                { id: 2, nome: "Aluno 02" },
            ], 
            professor: { id: 1, nome: "Professor"}
        }
    ]);

    const [infoMateria, setInfoMateria] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const materias = (await api.get("/materias")).data;

    //             setMaterias(materias)
    //         } catch (error) {  
    //             console.log(error);
    //         }
    //     })();
    // }, []);

    function getInfoMateria(id) {
        const infoMateria = materias.find(materia => materia.id === id);
YTH
        setInfoMateria(infoMateria);
    }

    return (
        <div>
            {
                isModalVisible &&
                <ModalLoginA closeModal={() => setIsModalVisible(false)}>
                    <button>Enviar</button>
                </ModalLoginA>
            }
            {
                isModalAlunoVisible &&
                <Modal>

                </Modal>

            }         
            <div className="bordaSuperior">
                <h1>Bem -Vindo!</h1>
            </div>
            <div>
            {
                materias.map(materia => <h3 key={materia.id} onClick={getInfoMateria(materia.id)}>{materia.nome}</h3>)
            }
            </div>
            {
                infoMateria &&
                <>
                    <h2>{infoMateria.nome}</h2>
                    { infoMateria.alunos.map(aluno => <p key={aluno.id}>{aluno.nome}</p>)}
                    <p>{infoMateria.professor.nome}</p>
                </>
            }
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