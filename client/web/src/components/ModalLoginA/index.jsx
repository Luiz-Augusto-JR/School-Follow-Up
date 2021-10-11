import { Modal } from "../Modal";
import "./styles.css";

export function ModalLoginA({ closeModal }) {
    return (
        <Modal closeModal={closeModal}>
            <form className="form-login">
                <button className="buttonCriar"  >Enviar</button>
            </form>
        </Modal>
    );
}