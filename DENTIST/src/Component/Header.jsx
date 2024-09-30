
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1>57<span style={{ color: "lightgreen" }}>D</span>entcare</h1>
        <nav>
          <ul className={menuOpen ? 'show' : ''}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/choose-us">Why Choose Us</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </nav>
        <a href="https://www.dentee.com/managemobile" className="contact-btn">
          Contact Us
          <img src="https://cdn-icons-png.flaticon.com/512/15991/15991677.png" alt="" />
        </a>&nbsp;&nbsp; 
        <div className="burger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
