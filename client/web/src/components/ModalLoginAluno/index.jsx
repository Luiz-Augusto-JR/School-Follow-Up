import { useState } from "react";
import { api } from "../../services/api";
import { Modal } from "../Modal";
import "./styles.css";

export function ModalLoginAluno ({ closeModal }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    async function criarLoginAluno(e) {
        e.preventDefault();
        
        if (!nome) {
            return alert("Informe um nome");
        }        

        if (!email) {
            return alert("Informe um e-mail");
        }

        if (senha !== confirmarSenha) {
            return alert("As senhas precisam ser compatíveis");
        }

        try {
            await api.post("/alunos", { nome, email, senha });
            alert("Aluno cadastrado com sucesso!");
            closeModal();
        } catch (error) {
            alert("Não foi possível criar o login do aluno")
        }
    }

    return (
        <Modal closeModal={closeModal}>
            <form className="form-login" onSubmit={criarLoginAluno}>
                <label>
                    Nome
                </label>
                <input className="inputModal" type="text" value={nome} onChange={e => setNome(e.target.value)} />
                <label>
                    E-mail
                </label>
                <input className="inputModal" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <label>
                    Senha
                </label>
                <input className="inputModal" type="password" value={senha} onChange={e => setSenha(e.target.value)} />
                <label>
                    Confirmar senha
                </label>
                <input className="inputModal" type="password" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} />
                <button className="criarAlunoProfessor" > ENVIAR</button>
            </form>
        </Modal>
    );
}