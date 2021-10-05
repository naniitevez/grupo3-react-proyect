import { Component } from "react";
import Swal from "sweetalert2";
import Button from "../Button/Button.jsx";

export class AddProduct extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0,
        };
        this.plus=this.plus.bind(this);
    }

    plus(){
        this.setState({
            counter:this.state.counter + 1,
        });
    }

    confirmation(){
        Swal.fire({
            title: "Buen Trabajo!", 
            text: "El producto se agregó al carrito con éxito!",
            icon: "success",
            confirmButtonText: "Cerrar",
            width: "70vw",
            confirmButtonColor: "#FF8126",
            backdrop: true,
            position: "center"
        })
    }

    render(){
        return(
            <div>
                <Button className="my-button" onClick={() => {
                    this.plus();
                    this.confirmation();
                }}
                >Agregar al Carrito</Button>

            </div>
        );
    }
}

export default AddProduct;