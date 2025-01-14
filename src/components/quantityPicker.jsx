import "./styles/quantityPicker.css"
import {useState} from "react";



function QuantityPicker () {
    const [quantity, setQuantity] = useState(1);


     function increase(){
         let value = quantity +1;
        setQuantity(value);
    }
    function decrease() {
         let value = quantity -1;
         setQuantity(value);
    }
    function onAdd(){
         console.log("added to cart");
    }


    return(
        <div className='catalog-buttons'>
            <div className='qt-picker'>
                <button className='btn btn-sm btn-outline-dark' disabled={quantity === 1} onClick={decrease}>-</button>
                <label>{quantity}</label>
                <button className='btn btn-sm btn-outline-dark' onClick={increase}>+</button>
            </div>
            <div className='add-to-cart'>
                <button className="btn btn-sm btn-outline-dark" onClick={onAdd}>Add To Cart</button>
            </div>
        </div>
    );
}

export default QuantityPicker;