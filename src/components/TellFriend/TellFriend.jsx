import React from "react";
import "./TellFriend.css"

const TellFriend = () => {
    return (
    <div className="tellFondo">
        <h1 className="tellTitulo">¡SUMATE A LA COMUNIDAD!</h1>
        <div className="redes">
            <div className="inst"><i class="fab fa-instagram"></i></div>
            <div className="tw"><i class="fab fa-twitter"></i></div>
            <div className="face"><i class="fab fa-facebook-f"></i></div>
            <div className="env"><i class="far fa-envelope"></i></div>
            <div className="at"><i class="fas fa-at"></i></div>
        </div>
    </div>
    )
}

export default TellFriend