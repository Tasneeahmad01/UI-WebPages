import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Sea<span>food</span></div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/fastfood">Fastfood</Link>
        <Link to="/chicken">Chicken</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div className="login-icon">
        <Link to="/login">Login <i className="fa-solid fa-arrow-right-to-bracket"></i></Link>
        <Link to="/signup">Sign-up <i className="fa-solid fa-arrow-right-to-bracket"></i></Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;
