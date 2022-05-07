import React, { useContext } from 'react'
import cartContext from "../cartContext"

export default function ListItem({ good }) {
    const context = useContext(cartContext);
    const price = good.price.regularPrice;
    const background = good.displayAssets[0].full_background;
    const name = good.granted[0].name
    const description = good.displayDescription;
    const id = good.mainId;
    return (
        <div className="card">
            <div className="card-image">
                <img src={background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button onClick={() => { context.addToBasket(id, name, price) }} className='waves-effect waves-light btn #ef9a9a red lighten-3'>Buy</button>
                <span style={{ marginLeft: "30px" }} className='rigth'>{price} hrn</span>
            </div>
        </div >
    )
}
