import "./Offers.css";
import OffersDetails from './OffersDetails';
import OffersSelector from "./OffersSelector";
import { useEffect, useState } from "react";
import axios from "axios";

function Offers() {

  const [offersData, setOffersData] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:3004/offersProducts")
      .then(res => {
        setOffersData(res.data)
    })
  }, []);


  return(
    <>
      <h2 className="offers-title">Últimas<span> Promociones</span></h2>
      <div className="cards-container">      
          {offersData.map((data) => {
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