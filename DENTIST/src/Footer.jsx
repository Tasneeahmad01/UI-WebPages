import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="Bottom-part">
        <hr />
        <h3 className="Logo">
          57 <span style={{ color: 'lightgreen' }}>D</span>entCare
        </h3>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-section about">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="http://localhost:5173/service">Services</a></li>
                  <li><a href="http://localhost:5173/about-us">About Us</a></li>
                  <li><a href="#">Why Choose Us</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>

              <div className="footer-section links">
                <h4>Pages</h4>
                <ul>
                  <li><a href="#">404</a></li>
                  <li><a href="#">Licensing</a></li>
                  <li><a href="#">Instruction</a></li>
                  <li><a href="#">Style Guide</a></li>
                  <li><a href="#">Changelog</a></li>
                  <li><a href="#">More Templates!</a></li>
                </ul>
              </div>

              <div className="footer-section address">
                <h4>Address</h4>
                <p>123 Dental Avenue City ville,</p>
                <p>State 12345 United States</p>
                <a href="https://www.google.com/maps/@28.7642952,77.9655074,17z?entry=ttu">View on Maps</a>
                <h4>Inquiries</h4>
                <span>(123) 456-7890</span>
                <br />
                <span>info@57dentalcare.com</span>
              </div>

              <div className="footer-section contact">
                <h4>Newsletter</h4>
                <p>Stay Updated with our Latest News</p>
                <div className="newsletter-input-container">
                  <input type="text" placeholder="Your Email" />
                  <i className="fa-solid fa-arrow-right"></i>
                </div>

                <div className="Icons">
                  <h4>Follow Us</h4>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                  <a href="https://x.com/?lang=en"><i className="fab fa-twitter"></i></a>
                  <a href="https://in.pinterest.com/"><i className="fa-brands fa-pinterest"></i></a>
                  <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/tasneem-ahmad-6641a329a/"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
