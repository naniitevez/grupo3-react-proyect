import React from "react";


function SorpresaImg(props){
    
    return(
        <div className="col-md-6 my-4">
        <img src= {props.imgUrl} alt="" className="w-100"/>
      </div>

    );
}

export default SorpresaImg;

