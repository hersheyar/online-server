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


    return(
        <div className='qt-picker'>
            <button className='btn btn-sm btn-outline-dark' disabled={quantity === 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className='btn btn-sm btn-outline-dark' onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;