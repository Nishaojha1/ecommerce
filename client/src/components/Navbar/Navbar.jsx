import React, { useState} from "react";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* LEFT */}
        <div className="left">
          <div className="item">
            <img
              src="/img/india.png"
              alt=""
              style={{ width: 20, height: 15 }}
            />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className= "link"  to="/products/2">Women</Link>
          </div>
          <div className="item">
            <Link className= "link"  to="/products/1">Men</Link>
          </div>
          <div className="item">
            <Link className= "link"  to="/products/3">Children</Link>
          </div>
        </div>

        {/* CENTER */}
        <div className="center">
          <Link className= "link"  to="/">SHOPPING DOSE</Link>
        </div>

        {/* RIGHT */}
        <div className="right">
          <div className="item">
            <Link className= "link"  to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className= "link"  to="/">About</Link>
          </div>
          <div className="item">
            <Link className= "link"  to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className= "link"  to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
