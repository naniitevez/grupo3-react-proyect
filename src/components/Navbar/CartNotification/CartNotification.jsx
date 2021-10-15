import React, { useContext } from "react";
import { OffersContext } from "../../../Context/OffersContext";

const CartNotification = () => {

  const { cartItems } = useContext(OffersContext)
  
  let numberOfNotifications = cartItems;
  return (
    <span id="cart-notification__container">
        {numberOfNotifications}
    </span>
  );
};

export default CartNotification;
