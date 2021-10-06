import { useState } from 'react';
import "./Offers.css";
import { offersProducts } from "../../products/offersProducts";
import Modal from "../Modal/Modal"
import Button from '../Button/Button.jsx';
import AddProduct from './AddProduct';

function Offers() {

  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  }

  return(
    <>
      <h2 className="offers-title">Últimas<span> Promociones</span></h2>
      <div className="cards-container">      
          {offersProducts.map((products) => {
            return (
              <div className="offers-cards">
                <div key={products.id}>
                  <img src={products.img} alt="Imagen del producto" className="img-product"/>
                  <p className="product-name">
                    {products.name}
                  </p>
                  <p className="product-model">
                    {products.model} - Talle: {products.size}
                  </p>
                  <div className="price">
                    <p className="offer-price">
                      {Math.round(((products.price) - (products.price) * (products.discount) / 100))}
                    </p>
                    <p className="origin-price">
                      {products.price}
                    </p>
                  </div>
                  <div className="card-button">
                    <Button className="open-button" onClick={toggle}>Comprar</Button>
                    <Modal active={active} toggle={toggle}>
                      <h5 className="modal-title">Confirmar<span> Compra</span></h5> 
                      <p>Confirmar para que el producto se añada al carrito de compras...</p>
                      <AddProduct/>
                    </Modal>
                  </div>
                </div>
              </div>  
            );
          })}
      </div>
    </>
  );
}

export default Offers;



