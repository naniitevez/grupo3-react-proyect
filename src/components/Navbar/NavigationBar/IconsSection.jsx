import React from "react";
import Icon from "./Icon";

const IconsSection = () => {
  return (
    <>
      <div className="icon-section__container">
        <Icon isCart="false">
          <i className="icon fas fa-search"></i>
        </Icon>
        <Icon isCart="false">
          <i className="icon fas fa-user"></i>
        </Icon>
        <Icon isCart="true">
          <i className="icon fas fa-shopping-cart"></i>
        </Icon>
      </div>
    </>
  );
};

export default IconsSection;
