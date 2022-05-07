import React, { useContext } from 'react'
import BasketItem from './BasketItem'
import cartContext from "../cartContext"


export default function BasketList({ orders }) {
    const cartContex = useContext(cartContext);

    const totalPrice = orders.reduce((sum, el) => {
        return sum += el.price * el.quantity;
    }, 0)
    return (
        <ul className="collection basket-list">
            <li className="collection-item active red lighten-2">Корзина</li>

            {orders.length > 0 ?
                orders.map((order) => {
                    return <BasketItem key={order.id} {...order} />
                })
                : <li className="collection-item">NOTHING HERE</li>}

            <li className="collection-item">Общая стоимость : {totalPrice}</li>
            <i className='material-icons basket-close' onClick={cartContex.handleBasket}>close</i>
        </ul>

    )
}
