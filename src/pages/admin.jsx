import "./styles/admin.css";

function Admin() {
    return (
        <div className="adminPage">
            <h1>This is the Admin page!!</h1>
            <div className="adminRegister">
                <div className="registerProduct">
                    <h3>Register Product</h3>
                    <div>
                        <label className="form-label">Title:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Image:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Price:</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="productSave admin-save-btn">
                        <div>
                            <button>Save Product</button>
                        </div>
                    </div>
                </div>
                <div className="registerCoupon">
                    <h3>Register Coupon</h3>
                    <div>
                        <label className="form-label">Code:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Discount:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="couponSave admin-save-btn">
                        <div>
                            <button>Save Coupon</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
