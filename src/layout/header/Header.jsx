import { Link } from "react-router-dom";
import "./header.scss";

import usericons from "../../assets/usericon.png";
import usercart from "../../assets/usercart.png";

import wishlist from "../../assets/wishlist.png";

import logo from "../../assets/greenoaisis.png";
import hamburger from "../../assets/hamburger.png";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Header() {
  const cartItems = useSelector((state) => state.cartReducer.cart);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="menu-layout">
      <div className="desktop-menu">
        <div className="logo-contain">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="menu">
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/categories"}>Categories</Link>
            <Link to={"/about-us"}>About us</Link>
          </nav>
        </div>
        <div className="ecommerce-menu">
          <Link to={"/wishlist"}>
            <img src={wishlist} alt="" />
          </Link>
          <Link to={"/user"}>
            <img src={usericons} alt="" />
          </Link>
          <Link to={"/cart"} id="cart-count">
            <img src={usercart} alt="" />
            <span>{cartItems.length}</span>
          </Link>
        </div>
      </div>
      <div className="mobile-menu">
        <div className="menu-header">
          <div className="mobile-logo-container">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="mobile-menu-open-button">
            <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <img src={hamburger} alt="" />
            </button>
          </div>
        </div>

        <div
          className={
            showMobileMenu
              ? "mobile-sidebar-menu show"
              : "mobile-sidebar-menu hide"
          }
        >
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/categories"}>Categories</Link>
            </li>
            <li>
              <Link to={"/about-us"}>About us</Link>
            </li>
            <li>
              <Link to={"/wishlist"}>Wishlist</Link>
            </li>
            <li>
              <Link to={"/account"}>Account</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
