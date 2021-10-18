import Modal from "../Modal/Modal";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Button from "../Button/Button";

import Swal from "sweetalert2";

const OffersSelector = (id, data) => {

  const {cartItems, setCartItems} = useContext(CartContext)

  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  } 

  const handleAddToCart = () => {
    const newProduct = {
      data
    }
    setCartItems([...cartItems, newProduct])
  }

  console.log(cartItems)

  const confirmation = () => {
    Swal.fire({
        title: "¡Buen trabajo!", 
        text: "El producto se agregó al carrito con éxito!",
        icon: "success",
        confirmButtonText: "Cerrar",
        width: "50%",
        confirmButtonColor: "#FF8126",
        backdrop: true,
        position: "center"
    });  
}
  return (
    <div className="card-button">
      <Button className="open-button" onClick={toggle}>Comprar</Button>
      <Modal active={active} toggle={toggle}>
        <h5 className="modal-title">Confirmar<span> Compra</span></h5> 
        <p>Confirmar para que el producto se añada al carrito de compras...</p>
        {/*Se llama esta variable sólo para control. Después se borra*/}
        <Button className="my-button" onClick={()=>{toggle(); confirmation(); handleAddToCart()}}>Agregar al Carrito</Button>
      </Modal>
    </div>
  )
}

export default OffersSelector
