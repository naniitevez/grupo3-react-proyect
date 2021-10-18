import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

const CartNotification = () => {

  const { cartItems } = useContext(CartContext)
  
  return (
    <span id="cart-notification__container">
        {cartItems.length}
    </span>
  );
};

export default CartNotification;
