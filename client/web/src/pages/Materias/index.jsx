import React, { useEffect, useState } from "react";
import "./stylesMaterias.css";
import { api } from "../../../../web/src/services/api";
import { Modal } from "../../components/Modal";


export function Materias() {
    const [materias, setMaterias] = useState([
        {
            id: 1,
            nome: materias.nome,
            alunos: [
                { id: 1, nome: "Aluno 01" },
                { id: 2, nome: "Aluno 02" },
            ],
            professor: { id: 1, nome: "Professor" }
        },
        {
            id: 2,
            nome: "Geografia",
            alunos: [
                { id: 1, nome: "Aluno 01" },
                { id: 2, nome: "Aluno 02" },
            ],
            professor: { id: 1, nome: "Professor" }
        }
    ]);

    const [infoMateria, setInfoMateria] = useState(null);
    const [alunoSelecionado, setAlunoSelecionado] = useState(null);
    const [notas, setNotas] = useState([]);
    const [frequencia, setFrequencia] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const materias = (await api.get(`/materias`)).data;
                setMaterias(materias)
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const professores = (await api.get("/professo")).data;
                setMaterias(materias)
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    function getInfoMateria(id) {
        const infoMateria = materias.find(materia => materia.id === id);
        setInfoMateria(infoMateria);
    }

    useEffect(() => {
        async function getNotasFrequenciaAluno() {
            try {
                const notas = (await api.get(`/alunos/${alunoSelecionado.id}/notas`)).data;
                const frequencia = (await api.get(`/alunos/${alunoSelecionado.id}/frequencia`)).data;

                setNotas(notas);
                setFrequencia(frequencia);
            } catch (error) {
                console.log(error);
            }
        }
    }, [alunoSelecionado]);

    return (

        <div>
            <div className="bordaSuperior">
                <h1>BEM-VINDO AO SCHOOL FOLLOW-UP!</h1>
            </div>
            <div className="materiasfont">
                <h2>materias</h2>
            </div>
            <div className="AlunosEProfessoresfont">
                <h2>Alunos E Professores</h2>
            </div>
            <div className="todasMaterias">
                {
                    materias.map(materia => <h3 key={materia.id} onClick={() => getInfoMateria(materia.id)}>{materia.nome}</h3>)
                }
            </div>
            {
                infoMateria &&
                <div className="professoresAlunos">
                    <h2>{infoMateria.nome}</h2>
                    {infoMateria.alunos.map(aluno => <p key={aluno.id} onClick={() => setAlunoSelecionado(aluno)}>{aluno.nome}</p>)}
                    <h2>{infoMateria.professor.nome}</h2>
                </div>
            }
            {
                alunoSelecionado &&
                <Modal>
                    <p>{alunoSelecionado.nome}</p>
                    <table>
                        <thead>
                            <th>alunoSelecionado.nota</th>
                            <th>Nota 02</th>
                            <th>Nota 03</th>
                            <th>Nota 04</th>
                            <th>Média</th>
                            <th>Frequência</th>
                        </thead>
                    </table>
                </Modal>
            }


        </div>

    );
}