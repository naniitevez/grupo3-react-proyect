import { setState, useContext } from "react";
import Swal from "sweetalert2";
import { OffersContext } from "../../Context/OffersContext.jsx";
import Button from "../Button/Button.jsx";

const AddProduct = () => {

    const { cartItems } = useContext(OffersContext)

    const plus = () => {
      setState({
        cartItems:cartItems + 1
      })
    }
    //Esta función la llamo en el onClick y no se ejecuta.


    const confirmation = () => {
        Swal.fire({
            title: "¡Buen trabajo!", 
            text: "El producto se agregó al carrito con éxito!",
            icon: "success",
            confirmButtonText: "Cerrar",
            width: "70%",
            confirmButtonColor: "#FF8126",
            backdrop: true,
            position: "center"
        })
    }

    return(
      <div>
        <Button className="my-button" onClick={confirmation}>Agregar al Carrito</Button>    
      </div>
    );
}

export default AddProduct;