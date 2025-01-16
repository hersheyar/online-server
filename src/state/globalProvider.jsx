import { useState } from 'react';
import GlobalContext from './globalContext';

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name:"Andrew", id:42});

    function addProductToCart(prod) {
        console.log("Global Add", prod);
        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    }

    function clearCart() {}

    function removeProductFromCart() {}

    return (
        <GlobalContext value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children}
        </GlobalContext>
    )
}

export default GlobalProvider;