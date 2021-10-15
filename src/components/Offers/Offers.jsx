import "./Offers.css";
import OffersDetails from './OffersDetails';
import OffersSelector from "./OffersSelector";
//import { useContext, setState, useEffect, useState } from "react";
//import axios from "axios";
import { offersProducts } from "../../products/offersProducts";

function Offers() {

  /*const [offersProducts, setOffersProducts] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:5000/offersProducts")
      .then(res => {
        setOffersProducts(res.data)
    })
  });*/

  return(
    <>
      <h2 className="offers-title">Últimas<span> Promociones</span></h2>
      <div className="cards-container">      
          {offersProducts.map((data) => {
            return (
              <div className="offers-cards">
                  <OffersDetails key={data.id} data={data}/> 
                  <OffersSelector/> 
              </div>
            );
          })}
      </div>
    </>
  );
}
export default Offers;