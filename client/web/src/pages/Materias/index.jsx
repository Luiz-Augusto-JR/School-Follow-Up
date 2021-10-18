import React, { useEffect, useState } from "react";
import "./stylesMaterias.css";
import { api } from "../../../../web/src/services/api";
import { Modal } from "../../components/Modal";


export function Materias() {
    const [materias, setMaterias] = useState([
        {
            id: 1,
            nome: "Matemática",
            alunos: [
                { id: 1, nome: "Aluno 01" },
                { id: 2, nome: "Aluno 02" },
                { id: 3, nome: "Aluno 03" },
                { id: 4, nome: "Aluno 04" },
                { id: 5, nome: "Aluno 05" },
                { id: 6, nome: "Aluno 06" },
                { id: 7, nome: "Aluno 07" },
                { id: 8, nome: "Aluno 08" },
                { id: 9, nome: "Aluno 09" },
                { id: 10, nome: "Aluno 10" },
            ],
            professor: { id: 1, nome: "LUIZ" }
        },
        {
            id: 2,
            nome: "Geografia",
            alunos: [
                { id: 1, nome: "Aluno 01" },
                { id: 2, nome: "Aluno 02" },
                { id: 3, nome: "Aluno 03" },
                { id: 4, nome: "Aluno 04" },
                { id: 5, nome: "Aluno 05" },
                { id: 6, nome: "Aluno 06" },
                { id: 7, nome: "Aluno 07" },
                { id: 8, nome: "Aluno 08" },
                { id: 9, nome: "Aluno 09" },
                { id: 10, nome: "Aluno 10" },
            ],
            professor: { id: 2, nome: "LUIZ" }
        },
        {
            id: 3,
            nome: "Inglês",
            alunos: [
                { id: 1, nome: "Aluno 01" },
                { id: 2, nome: "Aluno 02" },
                { id: 3, nome: "Aluno 03" },
                { id: 4, nome: "Aluno 04" },
                { id: 5, nome: "Aluno 05" },
                { id: 6, nome: "Aluno 06" },
                { id: 7, nome: "Aluno 07" },
                { id: 8, nome: "Aluno 08" },
                { id: 9, nome: "Aluno 09" },
                { id: 10, nome: "Aluno 10" },
            ],
            professor: { id: 3, nome: "LUIZ" }
        },
        {
            id: 4,
            nome: "ED Física",
            alunos: [
                { id: 1, nome: "Aluno 01" },
                { id: 2, nome: "Aluno 02" },
                { id: 3, nome: "Aluno 03" },
                { id: 4, nome: "Aluno 04" },
                { id: 5, nome: "Aluno 05" },
                { id: 6, nome: "Aluno 06" },
                { id: 7, nome: "Aluno 07" },
                { id: 8, nome: "Aluno 08" },
                { id: 9, nome: "Aluno 09" },
                { id: 10, nome: "Aluno 10" },
            ],
            professor: { id: 4, nome: "LUIZ" }
        },
        {
            id: 5,
            nome: "Português",
            alunos: [
                { id: 1, nome: "Aluno 01" },
                { id: 2, nome: "Aluno 02" },
                { id: 3, nome: "Aluno 03" },
                { id: 4, nome: "Aluno 04" },
                { id: 5, nome: "Aluno 05" },
                { id: 6, nome: "Aluno 06" },
                { id: 7, nome: "Aluno 07" },
                { id: 8, nome: "Aluno 08" },
                { id: 9, nome: "Aluno 09" },
                { id: 10, nome: "Aluno 10" },
            ],
            professor: { id: 5, nome: "LUIZ" }
        },
        {
            id: 6,
            nome: "Ciências",
            alunos: [
                { id: 1, nome: "Aluno 01" },
                { id: 2, nome: "Aluno 02" },
                { id: 3, nome: "Aluno 03" },
                { id: 4, nome: "Aluno 04" },
                { id: 5, nome: "Aluno 05" },
                { id: 6, nome: "Aluno 06" },
                { id: 7, nome: "Aluno 07" },
                { id: 8, nome: "Aluno 08" },
                { id: 9, nome: "Aluno 09" },
                { id: 10, nome: "Aluno 10" },
            ],
            professor: { id: 6, nome: "LUIZ" }
        },
        {
            id: 7,
            nome: "Filisofia",
            alunos: [
                { id: 1, nome: "Aluno 01" },
                { id: 2, nome: "Aluno 02" },
                { id: 3, nome: "Aluno 03" },
                { id: 4, nome: "Aluno 04" },
                { id: 5, nome: "Aluno 05" },
                { id: 6, nome: "Aluno 06" },
                { id: 7, nome: "Aluno 07" },
                { id: 8, nome: "Aluno 08" },
                { id: 9, nome: "Aluno 09" },
                { id: 10, nome: "Aluno 10" },
            ],
            professor: { id: 7, nome: "LUIZ" }
        },
        {
            id: 8,
            nome: "Artes",
            alunos: [
                { id: 1, nome: "Aluno 01" },
                { id: 2, nome: "Aluno 02" },
                { id: 3, nome: "Aluno 03" },
                { id: 4, nome: "Aluno 04" },
                { id: 5, nome: "Aluno 05" },
                { id: 6, nome: "Aluno 06" },
                { id: 7, nome: "Aluno 07" },
                { id: 8, nome: "Aluno 08" },
                { id: 9, nome: "Aluno 09" },
                { id: 10, nome: "Aluno 10" },
            ],
            professor: { id: 8, nome: "LUIZ" }
        },
        {
            id: 9,
            nome: "História",
            alunos: [
                { id: 1, nome: "Aluno 01" },
                { id: 2, nome: "Aluno 02" },
                { id: 3, nome: "Aluno 03" },
                { id: 4, nome: "Aluno 04" },
                { id: 5, nome: "Aluno 05" },
                { id: 6, nome: "Aluno 06" },
                { id: 7, nome: "Aluno 07" },
                { id: 8, nome: "Aluno 08" },
                { id: 9, nome: "Aluno 09" },
                { id: 10, nome: "Aluno 10" },
            ],
            professor: { id: 9, nome: "LUIZ" }
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
                const professores = (await api.get("/professores")).data;
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
                    <h2>Alunos de {infoMateria.nome}:</h2>
                    {infoMateria.alunos.map(aluno => <p key={aluno.id} onClick={() => setAlunoSelecionado(aluno)}>{aluno.nome}</p>)}
                    <h2>Professores:</h2>
                    <h3>{infoMateria.professor.nome}</h3>
                </div>
            }
            {
                alunoSelecionado &&
                <Modal>
                    <p className="modalAluno">{alunoSelecionado.nome}</p>
                    <br/>
                    <table>
                        <thead className="modalAluno" >
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