import React from "react";
import "./stylesLoginPage.css";
import gif from "../../assets/logoCortadaBranca.gif";



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
                    <input placeholder="digite seu email"
                    />
                </div>

                <div className="loginInputPassword">
                    <input placeholder="digite sua senha"
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



