import React from "react";
import CartNotification from "../CartNotification/CartNotification";
import Icon from "./Icon";

const IconsSection = () => {
  return (
    <>
      <div className="icon-section__container">
        <Icon>
          <i className="icon fas fa-search"></i>
        </Icon>
        <Icon>
          <i className="icon fas fa-user"></i>
        </Icon>
        <Icon>
          <i className="icon fas fa-shopping-cart"></i>
        </Icon>
        <CartNotification/>
      </div>
    </>
  );
};

export default IconsSection;
