import React from "react";
import Icon from "./Icon";

const IconsSection = () => {
  return (
    <>
      <div className="icon-section__container">
        <Icon iconType="fa-search"/>
        <Icon iconType="fa-user"/>
        <Icon iconType="fa-shopping-cart"/>
      </div>
    </>
  );
};

export default IconsSection;
