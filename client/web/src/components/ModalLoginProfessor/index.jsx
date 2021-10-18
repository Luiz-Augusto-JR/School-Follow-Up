import { Modal } from "../Modal";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { api } from "../../../../web/src/services/api";

export function ModalLoginProfessor({ closeModal }) {

    useEffect(() => {
        (async () => {
            try {
                const criarProfessor = (await api.put(`/alunos`)).data;
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);




    return (
        <Modal closeModal={closeModal}>
            <form className="form-login">
                <label>
                    Selecione a Matéria
                </label>
                <select className="selectMateria" name="Matéria">
                </select>
                <label>
                    Nome
                </label>
                <input className="inputModal" type="text" />
                <label>
                    E-mail
                </label>
                <input className="inputModal" type="text" />
                <label>
                    Senha
                </label>
                <input className="inputModal" type="text" />
                <label>
                    Confirmar senha
                </label>
                <input className="inputModal" type="text" />
                <button className="criarAlunoProfessor" > ENVIAR</button>
            </form>
        </Modal>
    );
}