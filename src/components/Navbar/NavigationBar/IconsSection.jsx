import React from "react";
import Icon from "./Icon";

const IconsSection = () => {
  return (
    <>
      <div className="icon-section__container">
        <Icon iconType="search"/>
        <Icon iconType="user"/>
        <Icon iconType="cart"/>
      </div>
    </>
  );
};

export default IconsSection;
