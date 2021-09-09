import React from "react";
import CartNotification from "../CartNotification/CartNotification";

const Icon = ({ iconType }) => {
  let iconClass = "icon fas "

  if(iconType === "search") iconClass += `fa-${iconType}`
  else if (iconType === "user") iconClass += `fa-${iconType}`
  else iconClass += `fa-shopping-${iconType}`
    
  return (
    <div className="icon__container">
      <i className={iconClass}></i>
      {
          iconType === "cart" && <CartNotification/>
      }
    </div>
  );
};

export default Icon;