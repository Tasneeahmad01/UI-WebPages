import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
    <hr/>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section brand-info">
            <h2>Guglia Muglia</h2>
            <p>Hub of Ukrainian brands</p>
            <p>Innovative mix of design concepts, ethnographic research, and unsurpassed attention to detail.</p>
            <p>Tips and tricks
Search Guide
Jweler photos
Jweler videos
Jweler illustrations
Plugins and apps
License information</p>
          </div>
          <div className="footer-section links">
            <a href="#">About</a>
            <a href="#">Jewelry</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">FAQs</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-section newsletter">
            <h3>Subscribe</h3>
            <p>Sign-up for 10% off your first online order</p>
            <form action="#">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Submit</button>
            </form>
            <div className='Icons'>
            <a href=""><i class="fa-brands fa-x-twitter"></i></a>
           <a href=""> <i class="fa-brands fa-youtube"></i></a>
           <a href=""><i class="fa-brands fa-instagram"></i></a> 
           <a href=""><i class="fa-brands fa-facebook"></i></a> 
           <div>
            <p>GugliaMuglia5643@gmail.com</p>
           </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Guglia Muglia. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
