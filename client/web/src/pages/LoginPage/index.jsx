import React, { useState } from "react";
import "./stylesLoginPage.css";
import gif from "../../assets/logoCortadaBranca.gif";
import { useAuth } from "../../contexts/AuthContext";



export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { authActions } = useAuth();

    async function handleLogin() {
        try {
            authActions.signIn(email, password);
        } catch (error) {
            alert(error.response.message);
        }
    }

    return (
        <div className="login">

            <div className="login-logo">
                <img src={gif} alt="logo" />
            </div>
            <div>
            <div className="login-right">
                <h1>Entrar no School Follow-UP</h1>

                <div className="loginInputEmail">
                    <input placeholder="digite seu email" value={email} onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="loginInputPassword">
                    <input placeholder="digite sua senha" type="password" value={password} onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button className="button" type="submit" onClick={handleLogin}>
                    <h2>ENTRAR</h2>
                </button>
                </div>

            </div>

        </div>
    );
}



