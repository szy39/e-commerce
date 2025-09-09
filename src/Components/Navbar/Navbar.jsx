import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="navbar-logo" />
        <p>SHOPPY</p>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-shop" : undefined)}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mens"
            className={({ isActive }) => (isActive ? "active-shop" : undefined)}
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/womens"
            className={({ isActive }) => (isActive ? "active-shop" : undefined)}
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kids"
            className={({ isActive }) => (isActive ? "active-shop" : undefined)}
          >
            Kids
          </NavLink>
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart-icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
