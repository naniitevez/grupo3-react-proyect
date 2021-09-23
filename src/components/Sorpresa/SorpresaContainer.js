import React from "react";
import SorpresaSection from "./SorpresaSection";
import SorpresaImg from './SorpresaImg'

import 'bootstrap'
import './prueba.css'



function SorpresaContainer(props){
    return(
        <div className="container">
            <div className="row my-5">
            <SorpresaImg  imgUrl= 'remera2.jpg' />
            <SorpresaSection  />

            </div>
        </div>

    );
}

export default SorpresaContainer;