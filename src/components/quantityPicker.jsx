import "./styles/quantityPicker.css"
import {useState} from "react";



function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);


     function increase(){
         let value = quantity +1;
        setQuantity(value);
        props.onChange(value);
    }
    function decrease() {
         let value = quantity -1;
         setQuantity(value);
         props.onChange(value);
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
        </div>
    );
}

export default QuantityPicker;