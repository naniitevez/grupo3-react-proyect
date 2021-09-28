import axios from "axios";
import { createContext, useState } from "react";

export const StoreContext = createContext()

const StoreContextProvider = ({children}) => {
    const [carouselData, setCarouselData] = useState([])

    const getCarouselData = () => {
        axios.get('http://localhost:3004/sliderData')
        .then(response => setCarouselData(response.data))
    }


    return (
        <StoreContext.Provider value={{carouselData, getCarouselData}}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;