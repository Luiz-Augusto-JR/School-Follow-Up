import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";
import gif from "../../assets/logoCortada.gif";
import { MdEmail, MdLock } from "react-icons/md";




export function LoginPage() {
    return (
        <div className="login">

            <div className="login-logo">
                <img src={gif} alt="logo" />
            </div>
            <div className="caixa-login-right">
            <div className="login-right">
                <h1>Entrar no School Follow-UP</h1>

                <div className="loginInputEmail">
                    <input size="50" type={Text}
                        placeholder="digite seu email"
                    />
                </div>

                <div className="loginInputPassword">
                    <input size="50"type={Text}
                        placeholder="digite sua senha"
                    />
                </div>

                <button className="button" type="submit">
                    <h2>ENTRAR</h2>
                </button>
                </div>

            </div>

        </div>
    );
}



