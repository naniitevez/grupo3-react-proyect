import React from "react";
import "./WhoMakes.css"
<script src="https://kit.fontawesome.com/9cf1c03648.js" crossorigin="anonymous"></script>


const WhoMakes = () => {
    return (
    <div className="contenedor">
        <div className="texto">
            <h1 className="titulo">PORQUE ELEGIRNOS?</h1>
            <h2>Consideramos ser un equipo...</h2>
            <ul className="items">
                <li class="far fa-check-circle"> ¡EXCELENTES PRECIOS!</li>
                <li class="far fa-check-circle"> ¡LA MAJOR CALIDAD!</li>
                <li class="far fa-check-circle"> ¡ENVIOS A TODO EL PAIS!</li>
                <li class="far fa-check-circle"> ¡GRAN SERVICIO POSTVENTA!</li>
            </ul>
            <button className="boton">VER PRODUCTOS</button>
        </div>
        <div>
            <img className="imagen" src="../imagenes/textil.png" alt="textil" />
        </div>
    </div>
    );
};

export default WhoMakes

