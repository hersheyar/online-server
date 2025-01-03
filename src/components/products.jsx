import "./styles/products.css"
import QuantityPicker from "./quantityPicker"

function Products() {
    return (
        <div className="product">
            <img src="https://picsum.photos/600" alt=""/>
            <h3>this is a product</h3>
            <label>$19.99</label>
            <label>$20.00</label>

            <QuantityPicker />
        </div>
    );
}

export default Products