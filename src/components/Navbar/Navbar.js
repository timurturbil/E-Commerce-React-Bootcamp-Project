import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import mountain from "../../assets/mountain.png";
import { BiLogOutCircle, BiFilm,BiX } from "react-icons/bi";
import IconButton from '@material/react-icon-button';
const Navbar = (props) => {
  const {
    setFetchData,
    setCategory,
    OrderNumber
  } = props;
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [myCategory, setMyCategory] = useState("");
  const searchCategory = () =>{
    /* console.log(myCategory) */
    setCategory(myCategory)
    setFetchData(true);
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="brand">
            <Link  to="/">
              <img src={mountain} />
            </Link>
          </div>
          <div className="myItems">
              <input
               size="50"
               className="form-control"
                type="search"
                placeholder="Search Product Category"
                aria-label="Search"
                onChange={(input) => setMyCategory(input.target.value)}
              />
            <button onClick={() => searchCategory()} className="SearchButton">Search</button>
          </div>

          <div className={click ? "nav-item active" : "nav-item"}>
            <Link className="nav-products mb-2" to="/products">
              <span>Products</span>
            </Link>
            <Link className="nav-login mb-2" to="/loginScreen">
              <span>Login</span>
            </Link>
            <Link className="nav-fav mb-2" to="/favorites">
              <i className="far fa-heart"></i>
            </Link>
            <Link className="nav-cart" to="/order">
              <i className="fas fa-shopping-cart"></i>
              <span className="nav-count">{OrderNumber}</span>
            </Link>
          </div>
          <Link to="/loginScreen">
          <IconButton className="nav-button" onClick={props.LogOut}>
              <BiLogOutCircle style={{marginTop: "0px"}} color="black" size={22} />
              </IconButton> 
              </Link>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
