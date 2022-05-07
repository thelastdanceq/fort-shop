import React, { useEffect, useState } from 'react'
import cartContext from "../cartContext"
import List from "./List"
import PreLoader from './PreLoader';
import Cart from './Cart';

import { API_KEY, APIURL } from '../config'
import BasketList from './BasketList';



export default function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [isBasketShown, setIsBasketShown] = useState(false);

    const addToBasket = (id, name, price) => {

        const isIteminCart = orders.findIndex((elem) => {
            return elem.id === id;
        })
        if (isIteminCart < 0) {
            setOrders([...orders, { id: id, name: name, price: price, quantity: 1 }])

        } else {
            const newOrders = orders.map((order, index) => {
                if (index === isIteminCart) {
                    return {
                        ...order,
                        quantity: order.quantity + 1
                    }
                } else {
                    return {
                        ...order
                    }
                }
            })
            setOrders([...newOrders])
        }
    }

    const deleteOrder = id => {
        setOrders(orders.filter((el) => {
            return el.id !== id;
        }))
    }

    const decrementsQuantity = (id) => {
        const newOrders = orders.map((order) => {
            if (order.id === id) {
                order.quantity = order.quantity - 1;
            }
            return order;
        }).filter((order) => {
            return order.quantity > 0;
        })

        return newOrders;
    }

    const incrementQuantity = (id) => {
        const newOrders = orders.map((order) => {
            if (order.id === id) {
                order.quantity = order.quantity + 1;
            }
            return order;
        })
        return newOrders;
    }

    const handleBasket = () => {
        setIsBasketShown(!isBasketShown);
    }

    // after component mounts fetch the data from server
    useEffect(() => {
        fetch(APIURL,
            {
                headers: {
                    'Authorization': API_KEY,
                }
            })
            .then(response => response.json())
            .then((data) => {
                setGoods(data.shop)
                setLoading(false);
            })
    }, [])
    return (
        <main className='container content'>
            <cartContext.Provider value={{ orders, addToBasket, deleteOrder, setOrders, handleBasket, decrementsQuantity, incrementQuantity }}>
                <Cart quantity={orders.length} />
                {loading ? <PreLoader /> : <List goods={goods} />}

                {
                    isBasketShown && <BasketList orders={orders} />
                }
            </cartContext.Provider>

        </main>
    )
}
