import React from "react";

const CartNotification = () => {
  let numberOfNotifications = 24
  return (
    <span id="cart-notification__container">
        {numberOfNotifications}
    </span>
  );
};

export default CartNotification;
