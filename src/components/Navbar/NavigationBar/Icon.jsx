import React from "react";
import CartNotification from "../CartNotification/CartNotification";

const Icon = ({ iconType }) => {

  return (
    <div className="icon__container">
      <i className={`icon fas ${iconType}`}></i>
      {
          iconType === "fa-shopping-cart" && <CartNotification/>
      }
    </div>
  );
};

export default Icon;

// {
//     <div className="icon__container">
//       {children}
//       {isCart && <CartNotification />}
//     </div>
//   }