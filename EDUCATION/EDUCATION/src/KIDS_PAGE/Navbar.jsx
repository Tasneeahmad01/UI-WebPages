import React, { useState } from "react";
import { Link } from "react-router-dom";  
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/">      
          <img
            src="https://img.freepik.com/premium-photo/colorful-logo-clothing-brand-called-cool-kids_1008415-123787.jpg"
            alt="Logo"
            className="Imag"
          />
        </Link>
        
        {/* Button for toggling the menu */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon">
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>

        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/class">Classes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/service">Our Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/request">Request</Link>
            </li>
          </ul>
          <div className="Btn">
            <Link to="/BookTrial">
              <button className="primary btn btn-submit">Book a Free Trial Class</button>
             
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
