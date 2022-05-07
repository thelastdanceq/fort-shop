import React, { useContext } from 'react'
import cartContext from "../cartContext"

export default function BasketItem({ id, name, price, quantity }) {
    const content = useContext(cartContext);
    return (
        <li className="collection-item">{name} <button onClick={() => {
            content.setOrders(content.decrementsQuantity(id))
            // incrementQuantity
        }}>-</button> {quantity} <button onClick={() => {
            content.setOrders(content.incrementQuantity(id))
        }}>+</button> {price} <div className="secondary-content" onClick={() => { content.deleteOrder(id) }}><i className="material-icons cart-delete-item">close</i></div></li>
    )
}
