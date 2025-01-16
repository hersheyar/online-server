import {useContext, useState} from 'react';
import GlobalContext from '../state/globalContext';
import "./styles/cart.css"

function Cart(){
    const cart = useContext(GlobalContext).cart;


    return (
        <div className='cart page'>
            <h1>Ready to complete a purchase?</h1>
            <h3>we have {cart.length} item in the cart</h3>
            <div className="list">
                <ul>
                    {cart.map(prod =>
                    <li className='cart-prod'>
                        <img src={prod.image} alt=""/>
                        <h6>{prod.title}</h6>
                        <label>#{prod.quantity}</label>
                        <label>#{prod.price.toFixed(2)}</label>
                        <label>{(prod.price * prod.quantity).toFixed(2)}</label>
                        <button className="btn btn-sm btn-outline-dark">Delete</button>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Cart;