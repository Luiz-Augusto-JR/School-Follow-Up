import { Modal } from "../Modal";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

export function ModalCriarNotaAluno({ closeModal }) {
    const [bimestre, setBimestre] = useState(1);
    const [materias, setMaterias] = useState([]);
    const [materia, setMateria] = useState(null);
    const [alunos, setAlunos] = useState([]);
    const [aluno, setAluno] = useState(null);
    const [nota, setNota] = useState(0);

    useEffect(() => {
        async function getMaterias() {
            try {
                const materias = (await api.get("/materias")).data;

                setMaterias(materias);
                setMateria(materias[0]?.id);
            } catch (error) {
                console.log(error);
            }
        }

        async function getAlunos() {
            try {
                const alunos = (await api.get("/alunos")).data;

                setAlunos(alunos);
                setAluno(alunos[0]?.id);
            } catch (error) {
                console.log(error);
            }
        }

        getMaterias();
        getAlunos();
    }, []);


    async function criarNota(e) {
        e.preventDefault();

        try {
            await api.post("/notas", { nota, materiaId: materia, alunoId: aluno, bimestre});
            alert("Nota cadastrada com sucesso!");
            closeModal();
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <Modal closeModal={closeModal}>
            <form className="form-login" onSubmit={criarNota}>
                <label>
                    Selecione a Matéria
                </label>
                <select className="selectMateria" name="Matéria" onChange={e => setMateria(e.target.value)}>
                    { 
                        materias.map(materia => (
                            <option key={materia.id} value={materia.id}>{materia.nome}</option>
                        ))
                    }
                </select>
                <label>
                    selecione o aluno
                </label>
                <select className="selectMateria" value={aluno} onChange={e => setAluno(e.target.value)}>
                    {
                        alunos.map(aluno => (
                            <option key={aluno.id} value={aluno.id}>{aluno.nome}</option>
                        ))
                    }
                </select>
                <label>
                    Selecione o bimestre
                </label>
                <select className="selectMateria" name="Matéria" value={bimestre} onChange={e => setBimestre(e.target.value)}>
                    {
                        <>
                            <option value={1}>1o Bimestre</option>
                            <option value={2}>2o Bimestre</option>
                            <option value={3}>3o Bimestre</option>
                            <option value={4}>4o Bimestre</option>
                        </>
                    }
                </select>
                <label>
                    DIGITE A NOTA
                </label>
                <input className="inputModal" type="number" value={nota} onChange={e => setNota(e.target.value)} />
                <button className="criarAlunoProfessor" > ENVIAR</button>
            </form>
        </Modal>
    );
}