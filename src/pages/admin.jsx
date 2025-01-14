import { useState } from 'react'
import "./styles/admin.css";

function Admin() {
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const [product, setProduct] = useState({
        title: "",
        price: "",
        image: "",
        category: "",
    });

    const [coupon, setCoupon] = useState({
        code: "", discount: ""});

    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.name;

        let copy = { ...product }; // Create a copy of the product state

        if (name === "title") {
            copy.title = text;
        } else if (name === "price") {
            copy.price = text;
        } else if (name === "image") {
            copy.image = text;
        } else if (name === "category") {
            copy.category = text;
        }

        setProduct(copy); // Update the state with the modified object
    }

    function handleCoupon(e) {
        const text = e.target.value;
        const name = e.target.name

        let copy = {...coupon};
        if(name =="code"){
            copy.code = text;
        }
        else if (name == "discount") {
            copy.discount = text;
        }
        setCoupon(copy);

    }
    function saveProduct() {
        console.log(product);
        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);

    }

    function saveCoupon() {
        console.log(coupon);
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);

    }

    return (
        <div className="adminPage page">
            <h1>This is the Admin page!!</h1>
            <div className="adminRegister">

                {/* Product Registration */}
                <div className="registerProduct">
                    <h3>Register Product</h3>

                    <div>
                        <label className="form-label">Title:</label>
                        {/* Step 3: Add `onBlur` and `name` to the input */}
                        <input
                            type="text"
                            className="form-control"
                            onBlur={handleProduct}
                            name="title"
                        />
                    </div>

                    <div>
                        <label className="form-label">Image:</label>
                        <input
                            type="text"
                            className="form-control"
                            onBlur={handleProduct}
                            name="image"
                        />
                    </div>

                    <div>
                        <label className="form-label">Price:</label>
                        <input
                            type="number"
                            className="form-control"
                            onBlur={handleProduct}
                            name="price"
                        />
                    </div>

                    <div>
                        <label className="form-label">Category:</label>
                        <input
                            type="text"
                            className="form-control"
                            onBlur={handleProduct}
                            name="category"
                        />
                    </div>

                    <div className="productSave admin-save-btn">
                        <div>
                            {/* Step 5: Call `saveProduct` on button click */}
                            <button onClick={saveProduct}>Save Product</button>
                        </div>
                    </div>

                    <ul>
                        {allProducts.map(prod => <li>{prod.title} = ${prod.price}</li>)}
                    </ul>
                    
                </div>

                {/* Coupon Registration */}

                <div className="registerCoupon">
                    <h3>Register Coupon</h3>

                    <div>
                        <label className="form-label">Code:</label>
                        <input
                            type="text"
                            className="form-control"
                            onBlur={handleCoupon}
                            name="code"
                        />
                    </div>

                    <div>
                        <label className="form-label">Discount:</label>
                        <input
                            type="text"
                            className="form-control"
                            onBlur={handleCoupon}
                            name="discount"
                        />
                    </div>

                    <div className="couponSave admin-save-btn">
                        <div>
                            <button onClick={saveCoupon}>Save Coupon</button>
                        </div>

                        <ul>
                            {allCoupons.map( cp => <li>{cp.code} - {cp.discount}%</li>)}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;