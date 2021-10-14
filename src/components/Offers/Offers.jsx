import "./Offers.css";
import { offersProducts } from "../../products/offersProducts";
import OffersDetails from './OffersDetails';
import OffersSelector from "./OffersSelector";

function Offers() {

  return(
    <>
      <h2 className="offers-title">Últimas<span> Promociones</span></h2>
      <div className="cards-container">      
          {offersProducts.map((products) => {
            return (
              <div className="offers-cards">
                  <OffersDetails key={products.id} data={products}/> 
                  <OffersSelector/> 
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Offers;



