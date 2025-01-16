import "./styles/products.css"
import QuantityPicker from "./quantityPicker"
import React, {useContext} from "react";
import GlobalContext from "../state/globalContext";


function Products(props){

        const globalAdd = useContext(GlobalContext).addProductToCart;

        function onAdd() {
            console.log("test");
            globalAdd(props.data);
        }

        return (
        <div className="product">
            <img src={props.data.image}/>
            <h3>{props.data.title}</h3>
            <div className='price-container'>
                <label>$19.99</label>
                <label>${props.data.price.toFixed()}</label>
            </div>
            <div className='quantpick-addbutton'>
                <QuantityPicker/>
                <button className="btn btn-sm btn-outline-dark" onClick={onAdd}>Add To Cart</button>
            </div>
        </div>
        );
}

export default Products;