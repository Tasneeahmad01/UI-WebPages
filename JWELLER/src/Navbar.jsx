import React, { useState } from 'react';
import { Link } from 'react-router-dom';   
import './Navbar.css';

function Navbar() {
const [isOpen,setIsOpen]=useState(false);
const toggleMenu = ()=>{
  setIsOpen(!isOpen);
};
  return (
    <>
      <div className="main">
        <div className="main-jweller">
          <div className="navbar">
            <img
              src="https://media.istockphoto.com/id/584866664/vector/14th-anniversary.jpg?s=612x612&w=0&k=20&c=yLXLX3iAgsXSpfBr6lvZP-nPqE_Sx8OD9OM31dwrMIk="
              alt=""
            />
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
              <Link to="/" onClick={toggleMenu}>Home</Link>   
              <Link to="/products" onClick={toggleMenu}>Products</Link>
              <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
              <Link to="/about" onClick={toggleMenu}>About Us</Link>
              <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
            </div>
            <div className='login-out'>
            <a href="/login" ><span>Login</span></a>
            <a href="logout"><span>LogOut</span></a>
            </div>
            <i class="fa-solid fa-bars" onClick={toggleMenu}></i>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Navbar;