import "./Header.css";
import { NavLink } from "react-router-dom";

import {
  faHouse,
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/" className="logo-container">
        <img
          className="logo"
          src="/images/allinone-logo-crop.jpeg"
          alt="logo"
        />
        <div className="title">All-In-One-Shop</div>
      </NavLink>
      <div className="search-container">
        <FontAwesomeIcon
          className="search-icon"
          icon={faMagnifyingGlass}
          style={{ color: "#999a9a" }}
        />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-right-container">
        <button className="btn-login">Login</button>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHouse} style={{ color: "#999a9a" }} />
        </NavLink>
        <NavLink to="/wishlist">
          <FontAwesomeIcon icon={faHeart} style={{ color: "#999a9a" }} />
        </NavLink>
        <NavLink className="cart-container" to="/cart">
          <FontAwesomeIcon icon={faCartShopping} style={{ color: "#999a9a" }} />
          <p>Cart</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
