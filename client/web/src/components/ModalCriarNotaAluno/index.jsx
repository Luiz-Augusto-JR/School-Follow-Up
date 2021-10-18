import { Modal } from "../Modal";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

export function ModalCriarNotaAluno({ closeModal }) {
    return (
        <Modal closeModal={closeModal}>
            <form className="form-login">
                <label>
                    Selecione a Matéria
                </label>
                <select className="selectMateria" name="Matéria">
                </select>
                <label>
                    selecione o aluno
                </label>
                <select className="selectMateria" name="Matéria">
                </select>
                <label>
                    Selecione a nota
                </label>
                <select className="selectMateria" name="Matéria">
                </select>
                <label>
                    DIGITE A NOTA
                </label>
                <input className="inputModal" type="text" />
                <button className="criarAlunoProfessor" > ENVIAR</button>
            </form>
        </Modal>
    );
}