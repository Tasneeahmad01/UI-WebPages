import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);  

  return (
    <nav className="navbar">
   <Link to="/"style={{textDecoration:"none",color:"#DAA520"}}><div className="logo">Mix<span>food</span></div></Link>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/fastfood" onClick={closeMenu}>Fastfood</Link>
        <Link to="/chicken" onClick={closeMenu}>Chicken</Link>
        <Link to="/shop" onClick={closeMenu}>Shop</Link>
      </div>
      <div className="login-icon">
        <Link to="/login" onClick={closeMenu}>Login <i className="fa-solid fa-arrow-right-to-bracket"></i></Link>
        <Link to="/signup" onClick={closeMenu}>Sign-up <i className="fa-solid fa-arrow-right-to-bracket"></i></Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;
