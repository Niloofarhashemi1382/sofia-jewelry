import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";

import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        SOFIA JEWELRY
      </div>

      <div
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>

        <Link to="/products">Collections</Link>

        <Link to="/about">About</Link>

        <Link to="/products">Products</Link>

        <Link to="/contact">Contact</Link>
      </nav>

      <div className="header-icons">
        <FiSearch />
        <FiHeart />
        <FiShoppingBag />
      </div>
    </header>
  );
}

export default Header;