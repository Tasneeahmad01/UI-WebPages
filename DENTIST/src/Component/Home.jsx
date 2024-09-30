import React from 'react';
import { Link } from 'react-router-dom';
 
function Home() {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cards">Cards</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/choose-us">Choose Us</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/fee-form">Fee Form</Link></li>
        </ul>
       
      </nav>
    </div>
  );
}

export default Home;