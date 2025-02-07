// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu after navigation
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo"> <pre></pre>BATA Shoes</h2>
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              className="nav-item" 
              activeClassName="active"
              exact
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/products" 
              className="nav-item" 
              activeClassName="active"
              onClick={closeMenu}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className="nav-item" 
              activeClassName="active"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className="nav-item" 
              activeClassName="active"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Hamburger icon with transition */}
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
