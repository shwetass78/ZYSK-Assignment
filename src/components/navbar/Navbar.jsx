import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="image/logo.png" alt="Logo" />
      </div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Nav links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li className="dropdown-container">
          <a href="#">Home</a>
        </li>
        <li className="dropdown-container">
          <a href="#">Products</a>
          <img src="image/arrow.png" alt="Arrow" />
        </li>
        <li className="dropdown-container">
          <a href="#">Resources</a>
          <img src="image/arrow.png" alt="Arrow" />
        </li>
        <li className="dropdown-container">
          <a href="#">Pricing</a>
        </li>
      </ul>

      <div className="profile">
        <img src="image/profile.png" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
