import "./styles/catalog.css"

import Product from "../components/products.jsx"

function Catalog() {
    return (
       <div className="catalog">
           <h1>Check out our catalog!</h1>

           <Product />
           <Product />
           <Product />
           <Product />
           <Product />
       </div>
    );
}

export default Catalog;