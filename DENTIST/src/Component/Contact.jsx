// Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
       <Link to="/contact"><h1>Contact Us</h1>
       <p>Contact details or form can go here.</p></Link>
      
    </div>
  );
};

export default Contact; // Ensure it has a default export
