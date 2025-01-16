import "./styles/products.css"
import QuantityPicker from "./quantityPicker"
import React, {useContext} from "react";
import {useState} from "react";
import GlobalContext from "../state/globalContext";


function Products(props){

        const [quantity, setQuantity] = useState(1);
        const globalAdd = useContext(GlobalContext).addProductToCart;

        function onAdd() {
            let fixedProduct = {...props.data};
            fixedProduct.quantity = quantity;
            globalAdd(fixedProduct);
        }

        function handleQuantity(qty) {
            console.log(qty);
            setQuantity(qty)
        }

        return (
        <div className="product">
            <img src={props.data.image}/>
            <h3>{props.data.title}</h3>
            <div className='price-container'>
                <label>$19.99</label>
                <label>${props.data.price.toFixed(2)}</label>
            </div>
            <div className='quantpick-addbutton'>
                <QuantityPicker onChange={handleQuantity}/>
                <button className="btn btn-sm btn-outline-dark" onClick={onAdd}>Add To Cart</button>
            </div>
        </div>
        );
}

export default Products;