import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import mountain from "../../assets/mountain.png";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="brand">
            <Link exact to="/">
              <img src={mountain} />
            </Link>
          </div>
          <div>
            <form class="form-inline">
              <input
               size="50"
                class="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>

          <div className={click ? "nav-item active" : "nav-item"}>
            <Link className="nav-products mb-2" to="/products">
              <span>Products</span>
            </Link>
            <Link className="nav-login mb-2" to="/loginScreen">
              <span>Login</span>
            </Link>
            <Link className="nav-fav mb-2" to="/favorites">
              <i class="far fa-heart"></i>
            </Link>
            <Link className="nav-cart" to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="nav-count">{props.cartLength}</span>
            </Link>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
