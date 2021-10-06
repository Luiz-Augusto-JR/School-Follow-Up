import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";
import { MdEmail, MdLock } from "react-icons/md";




export function LoginPage() {
    return (
        <div className="login">

            <div className="login-logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="login-right">
                <h1>Entrar no School Follow-UP</h1>

                <div className="loginInputEmail">
                    <MdEmail />
                    <input type={Text}
                        placeholder="digite seu email"
                    />
                </div>

                <div className="loginInputPassword">
                    <MdLock />
                    <input type={Text}
                        placeholder="digite sua senha"
                    />
                </div>

                <button type="submit">
                    Login
                </button>

            </div>

        </div>
    );
}



