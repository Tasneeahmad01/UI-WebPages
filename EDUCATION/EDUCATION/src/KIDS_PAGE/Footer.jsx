import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialStyles = { border: "1px solid blue", padding: "2px", borderRadius: "5px", fontSize: "20px" };
  const linkClass = "text-decoration-none list-item";

  return (
    <footer className="mt-5" style={{ padding: '50px 0', backgroundColor: "#f9f9f9" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 style={{ color: "blue", fontFamily: "cursive" }}>
              MAKER<span style={{ color: "red" }}>KID'S®</span>
            </h5>
            <p>Award-winning programs for kids ages 6-13 on Coding, Robotics, and Minecraft that unleash potential</p>
            <div className="social-icons">
              <a href="#" className="me-2" style={socialStyles}><FaFacebookF /></a>
              <a href="https://x.com/?lang=en" className="me-2" style={socialStyles}><FaTwitter /></a>
              <a href="https://www.linkedin.com/feed/" className="me-2" style={socialStyles}><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/tasneemahmad242/?__pwa=1" style={socialStyles}><FaInstagram /></a>
            </div>
          </div>
          {[
            { title: "Programs", links: ["Coding", "Robotics", "Minecraft"] },
            { title: "About Us", links: ["Approach", "Press", "Testimonials", "Success Stories"] },
            { title: "Others", links: ["Blog", "Careers", "FAQ", "Franchising", "For Employers", "For Schools & Organizations"] }
          ].map((section, index) => (
            <div key={index} className="col-md-2">
              <h5>{section.title}</h5>
              <div className="d-flex flex-column lh-lg">
                {section.links.map((link, i) => (
                  <a key={i} href="#" className={linkClass}>{link}</a>
                ))}
              </div>
            </div>
          ))}
          <div className="col-md-3">
            <h5>Contact</h5>
            <p><a href="tel:18446253754" className={linkClass}>1 844-625-3754</a></p>
            <p><a href="mailto:info@makerkids.com" className={linkClass}>info@makerkids.com</a></p>
          </div>
        </div>
        <div className="text-center py-3 border-top">
          <p className="mb-0">Copyright © 2022 MakerKids. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
