import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import faBars icon

function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="https://cdn.freelogovectors.net/wp-content/uploads/2021/12/zerodha-logo-freelogovectors.net_.png"
            alt="Logo"
            style={{ width: "150px" }} // Set width of the image
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}  >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
