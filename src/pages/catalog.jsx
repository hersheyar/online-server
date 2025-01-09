import "./styles/catalog.css"
import Product from "../components/products.jsx"
import {useState} from 'react'


const dummyData = [
    {
        "title": "Product 1",
        "category": "First",
        "price": 12.99,
        "image": "https://picsum.photos/id/201/600",
        "_id": "01"
    },
    {
        "title": "Product 2",
        "category": "Second",
        "price": 12.99,
        "image": "https://picsum.photos/id/202/600",
        "_id": "02"
    },
    {
        "title": "Product 3",
        "category": "Third",
        "price": 12.99,
        "image": "https://picsum.photos/id/203/600",
        "_id": "03"
    },
    {
        "title": "Product 4",
        "category": "Fourth",
        "price": 12.99,
        "image": "https://picsum.photos/id/204/600",
        "_id": "04"
    },
    {
        "title": "Product 5",
        "category": "Fifth",
        "price": 12.99,
        "image": "https://picsum.photos/id/206/600",
        "_id": "05"
    }
];

const dummyCategories = ["First", "Second", "Third", "Fourth", "Fifth"]

function Catalog() {
    const [ allProducts, setAllProducts] = useState(dummyData);

    const [allCatagories,setAllCatagories] = useState(dummyCategories)

    return (
       <div className="catalog page">
           <h1>Check out our catalog!</h1>
           <div className="filter">
           {
               allCatagories.map(catg => <button className='btn btn-outline-dark'>{catg}</button>)
           }
           </div>

           {
               allProducts.map(prod => <Product data={prod}/>)
           }
       </div>
    );
}

export default Catalog;