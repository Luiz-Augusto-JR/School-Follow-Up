import "./styles.css";

export function Modal({ children, closeModal }) {
    return (
        <div className="fundo-modal">
            <div className="container-modal">
                <button className="button-close-modal" onClick={() => closeModal()}>X</button>
                { children }
            </div>
        </div>
    );
}