import React from "react";

function SorpresaSection(){

    const titulo= 'Sorprende a Alguien';
    const subtitulo='Imprimi tu remera on-line';
    const texto= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis,  dolores cupiditate modi maxime dolore soluta quia doloribus distinctio iusto quibusdam   delectus dolorem totam architecto voluptates earum obcaecati, rerum minima!";

    return(
        <div className="col-md-6 my-4">
        <h2 className="sorpresa_tit">{titulo}</h2>
        <h3 className="sorpresa_subt">{subtitulo}</h3>
        <p className="sorpresa_texto">{texto}</p>
        <button className="sorpresa_btn">Compra ahora</button>
      </div>    

    );
}

export default SorpresaSection