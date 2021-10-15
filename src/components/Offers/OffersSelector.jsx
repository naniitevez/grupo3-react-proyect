import Modal from "../Modal/Modal";
import { useContext, useState } from "react";
import { OffersContext } from "../../Context/OffersContext";
import Button from "../Button/Button";
import AddProduct from "../Offers/AddProduct";

const OffersSelector = () => {

  const { cartItems } = useContext(OffersContext)

  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  } 

  return (
    <div className="card-button">
      <Button className="open-button" onClick={toggle}>Comprar</Button>
      <Modal active={active} toggle={toggle}>
        <h5 className="modal-title">Confirmar<span> Compra</span></h5> 
        <p>Confirmar para que el producto se añada al carrito de compras...</p>
        {cartItems} 
        {/*Se llama esta variable sólo para control. Después se borra*/}
        <AddProduct/>
      </Modal>
    </div>
  )
}

export default OffersSelector
