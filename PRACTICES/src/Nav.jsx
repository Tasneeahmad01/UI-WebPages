import React, { useState } from 'react';
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";  // ✅ Import Link here
import './Nav.css';

const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="header">
        <div className="top_header">
          <div className="icon">
            <MdLocalShipping />
          </div>
          <div className="info">
            <p>Free Shipping When Shopping upto $1000</p>
          </div>
        </div>

        <div className="mid_header">
          <div className="logo">
            <img
              src="https://techayo-ishi.myshopify.com/cdn/shop/files/Logo_large_7f435a99-3203-4e46-976d-678a5aeb8f5c_large.png?v=1645849203"
              alt="logo"
            />
          </div>

          <div className="search_box">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
            <button><AiOutlineSearch /></button>
          </div>

          {/* 👤 Login / Logout Button */}
          <div className="user">
            <div className="icon">
              {isAuthenticated ? <CiLogout /> : <FiLogIn />}
            </div>
            <div className="btn">
              {
                isAuthenticated ? (
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>
                ) : (
                  <button onClick={loginWithRedirect}>Login</button>
                )
              }
            </div>
          </div>
        </div>

        {/* 👤 Show Authenticated User Info */}
        {
          isAuthenticated && (
            <div className="last_header">
              <div className="user_profile">
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
              </div>
            </div>
          )
        }

        {/* 📌 Navigation Menu */}
        <div className="nav">
          <ul>
            <button className='nav_btn'>ALL CATEGORIES</button>
            <li><Link to="/About us" className="link">About us</Link></li>
            <li><Link to="/Collection us" className="link">Collection us</Link></li>
            <li><Link to="/Contact" className="link">Contact</Link></li>
            <li><Link to="/Blog" className="link">Blog</Link></li>
            <li><Link to="/Shop" className="link">Shop</Link></li>
            <li><Link to="/Service" className="link">Service</Link></li>
            <li><Link to="/Product" className="link">Product</Link></li>
            <button className='nav_btn'>FLAT 10% OFF ALL PURCHASE</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
