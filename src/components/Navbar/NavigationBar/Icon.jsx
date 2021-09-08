import React from 'react'
import CartNotification from '../CartNotification/CartNotification'

const Icon = ({children, isCart}) => {

    return (
        <>
        {
            isCart && <CartNotification/>
        }
        <div className="icon__container">
            {children}
        </div>
        </>
    )
}

export default Icon
