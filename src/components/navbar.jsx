import "./styles/navbar.css";

import {Link} from 'react-router-dom';
import {useContext} from "react";
import GlobalContext from "../state/globalContext";

function Navbar() {

    const user = useContext(GlobalContext).user;
    const cart= useContext(GlobalContext).cart;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/homepage">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Catalog</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="admin">Admin</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <div className="d-flex gap-2"  role="search">
                        <button className="btn btn-outline-success" type="name">{user.name}    </button>
                        <Link className="btn btn-light" to="/cart">
                           <span className="badge text-bg-secondary" >{cart.length}</span> View Cart
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;