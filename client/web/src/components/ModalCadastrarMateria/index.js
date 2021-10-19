import "./styles.css";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Modal } from "../Modal";
import { SuperSearchbox } from "../SuperSearchBox";

export function ModalCadastrarMateria({ closeModal }) {
    const  [nome, setNome] = useState("");
    const [alunos, setAlunos] = useState([]);
    const [professores, setProfessores] = useState([]);
    const [professor, setProfessor] = useState([]);
    const [selectedStudents, setSelectedStudents] = useState([]);

    useEffect(() => {
        async function getProfessores() {
            try {
                const professores = (await api.get("/professores")).data;

                setProfessores(professores);
            } catch (error) {
                console.log(error);
            }
        }

        async function getAlunos() {
            try {
                const alunos = (await api.get("/alunos")).data;

                setAlunos(alunos);
            } catch (error) {
                console.log(error);
            }
        }

        getProfessores();
        getAlunos();
    }, []);

    function addStudentToClass(student) {  
        const studentAlreadyExists = selectedStudents.find(selectedStudent => (
            selectedStudent.id === student.id
        ));
        
        if (!studentAlreadyExists) {
            setSelectedStudents([...selectedStudents, student])
        }        
    }

    async function criarMateria(e) {
        e.preventDefault();

        try {
            const alunosIds = alunos.map(aluno => aluno.id)
            await api.post("/materias", { nome, professorId: professor, alunos: alunosIds});
            alert("Matéria cadastrada com sucesso!");
            closeModal();
        } catch (error) {
            console.log(error);
        }
    }

    async function removerAluno(id) {
        const updatedAlunos = selectedStudents.filter(aluno => aluno.id !== id);

        setSelectedStudents(updatedAlunos);
    }

    return (
        <Modal closeModal={closeModal}>
            <form className="form-cadastro-materia" onSubmit={criarMateria}>
                <label>Nome da matéria</label>
                <input className="inputModal" value={nome} onChange={e => setNome(e.target.value)} />
                <label>Selecione o professor</label>
                <select className="selectMateria" onChange={e => setProfessor(e.target.value)}>
                    { professores.map(professor => (
                        <option key={professor.id} value={professor.id}>{professor.nome}</option>
                    ))}
                </select>                
                <label>Selecionar os estudantes</label>
                <SuperSearchbox 
                    users={alunos}
                    addUser={addStudentToClass}    
                />
                {
                    selectedStudents.map(aluno => (
                        <div key={aluno.id} className="lista-alunos">
                           <hr></hr>             
                            <p>{aluno.nome}</p>
                            <button className="removerAluno" onClick={() => removerAluno(aluno.id)}>Remover aluno</button>
                            <hr></hr>  
                        </div>
                    ))
                }
                <button className="criarAlunoProfessor">Cadastrar matéria</button>
            </form>            
        </Modal>
    )
}