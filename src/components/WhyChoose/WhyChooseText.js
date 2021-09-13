// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import './whyChooseText.css'

function WhyChooseText(props){
    
    
    return(
        <div className="container">
            <div className="icono"><FontAwesomeIcon icon = {props.icon}/></div>
            <div className="titulo">{props.title}</div>
            <div className="texto">{props.texto}</div>    

        </div>
    );

}

export default WhyChooseText