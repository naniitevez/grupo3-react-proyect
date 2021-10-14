import { createContext, useState } from "react";

export const OffersContext = createContext()

export const OffersContextProvider = ({children}) => {
    const [counter, setCounter] = useState(0)

    return (
        <OffersContext.Provider value={{counter, setCounter}}>
            {children}
        </OffersContext.Provider>
    )
}

export default OffersContextProvider;