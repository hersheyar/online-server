import "./styles/products.css"
import QuantityPicker from "./quantityPicker"

function Products(props){
    return (
        <div className="product">
            <img src={props.data.image}/>
            <h3>{props.data.title}</h3>
            <label>$19.99</label>
            <label>{props.data.price}</label>

            <QuantityPicker />
        </div>
    );
}

export default Products