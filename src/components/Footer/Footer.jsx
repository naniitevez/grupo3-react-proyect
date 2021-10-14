import React from 'react';
import AboutUs from './AboutUs';
import AllCategories from './AllCategories';
import GiftsAndCombos from './GiftsAndCombos';
import Occasions from './Occasions';
import Music from './Music';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-img">
        <img src="remera2.jpg" alt=""/>
      </div>

      <Occasions/>
      <AllCategories/>
      <GiftsAndCombos/>
      <Music/>
      <AboutUs/>
    </div>
  )
}

export default Footer
