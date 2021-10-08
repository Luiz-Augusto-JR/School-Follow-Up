import React from "react";
import "./stylesAdminHome.css";
import gif from "../../assets/logoCortadaBranca.gif";
import { AiFillPlusCircle } from "react-icons/ai";


export function AdminHome () {
    return (
        <div>
        <div className="bordaSuperior">
            <h1>Bem -Vindo!</h1>
        </div>
        <div className="buttonDiv">
            <button class="buttonCriar" type="button"><AiFillPlusCircle /><text> CRIAR LOGIN ALUNOS</text></button>
            <button class="buttonCriar" type="button"><AiFillPlusCircle /><text> CRIAR LOGIN PROFESSORES</text></button>
        </div>
        <div className="divMaterias">
        <button class="buttonMaterias" type="button"><text>MATÉRIAS</text></button>
        </div>
            <div className="home-logo">
                <img src={gif} alt="logo" />
            </div>
        </div>
 
    );
}