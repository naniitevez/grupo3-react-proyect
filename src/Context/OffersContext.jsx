import { createContext, useState } from "react";

export const OffersContext = createContext()

export const OffersContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(0)

    return (
        <OffersContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </OffersContext.Provider>
    )
}

export default OffersContextProvider;