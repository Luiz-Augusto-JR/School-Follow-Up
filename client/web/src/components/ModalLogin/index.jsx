import { Modal } from "../Modal";
import "./styles.css";

export function ModalLogin({ closeModal }) {
    return (
        <Modal closeModal={closeModal}>
            <form className="form-login">
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
                <button className="buttonCriar"  >Enviar</button>
            </form>
        </Modal>
    );
}