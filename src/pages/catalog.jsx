import "./styles/catalog.css"
import Product from "../components/products.jsx"
import dataService from "../services/dataService.js"
import {useEffect, useState} from 'react'


function Catalog() {
    const [ allProducts, setAllProducts] = useState([]);

    const [allCategories,setAllCategories] = useState([])

    const [selectedCategory, setSelectedCategory] = useState("")

    function loadData(){
        const prods = dataService.getProducts();
        const cats = dataService.getCategories();
        setAllProducts(prods);
        setAllCategories(cats);
    }

    function handleCategory(catg){
        console.log("cat clicked", catg);
        setSelectedCategory(catg);

    }

    function clearFilter() {
        setSelectedCategory("");
    }

    //do something when cmp loads
    useEffect(function(){
        loadData();
    }, []);

    return (
       <div className="catalog page">
           <div className="catalog-header">
               <h1>Cloud Services</h1>
               <h3>List of services we leverage to help enhance your cloud environment.</h3>
           </div>
           <div className="filter">

               <button onClick={clearFilter} className='btn btn-sm btn-primary'>All</button>
               {
                   allCategories.map(catg => <button onClick={() => handleCategory(catg)}
                                                     className='btn btn-outline-dark'>{catg}</button>)
               }
           </div>

           {
               allProducts.filter(prod => !selectedCategory || prod.category === selectedCategory) .map(prod => <Product data={prod}/>)
           }
       </div>
    );
}

export default Catalog;