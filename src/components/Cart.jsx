import React, { useContext } from 'react'
import cartContext from "../cartContext"


export default function Cart(props) {
    const { quantity = 0 } = props;
    const handler = useContext(cartContext).handleBasket;

    return (
        <div className='cart #ef9a9a red lighten-3' onClick={handler}>
            <i className=' icon material-icons '>shop</i>
            {quantity >= 0 ? <span className='cart-quantity'>{quantity}</span> : null}
        </div >
    )
}
