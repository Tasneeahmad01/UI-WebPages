import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='mt-5' style={{padding: '50px 0' }}>
      <div className="container">
        <div className="row" style={{backgroundColor:"#f9f9f9"}}>
          <div className="col-md-3 d-flex flex-column justify-content-between">
            <h5 className='fs-4 ' style={{color:"blue",fontFamily:"cursive"}}>MAKER<span style={{color:"red"}}>KID'S®</span></h5>
            <p>Award-winning programs for kids ages 6-13 on Coding, Robotics, and Minecraft that unleash potential</p>
            <div className="social-icons">
              <a href="#" className="me-2" style={{border:"1px solid blue",padding:"2px",borderRadius:"5px",fontSize:"20px"}}><FaFacebookF /></a>
              <a href="#" className="me-2" style={{border:"1px solid blue",padding:"2px",borderRadius:"5px",fontSize:"20px"}}><FaTwitter /></a>
              <a href="#" className="me-2" style={{border:"1px solid blue",padding:"2px",borderRadius:"5px",fontSize:"20px"}}><FaLinkedinIn /></a>
              <a href="#" style={{border:"1px solid blue",padding:"2px",borderRadius:"5px",fontSize:"20px"}}><FaInstagram /></a>
            </div>
          </div>
          <div className="col-md-2 d-flex flex-column justify-content-between">
            <h5>Programs</h5>
            <div className="d-flex flex-column lh-lg">
              <a href="#" className="text-decoration-none list-item">Coding</a>
              <a href="#" className="text-decoration-none list-item">Robotics</a>
              <a href="#" className="text-decoration-none list-item">Minecraft</a>
            </div>
          </div>
          <div className="col-md-2 d-flex flex-column justify-content-between">
            <h5>About Us</h5>
            <div className="d-flex flex-column lh-lg">
              <a href="#" className="text-decoration-none list-item">Approach</a>
              <a href="#" className="text-decoration-none list-item">Press</a>
              <a href="#" className="text-decoration-none list-item">Testimonials</a>
              <a href="#" className="text-decoration-none list-item">Success Stories</a>
            </div>
          </div>
          <div className="col-md-2 d-flex flex-column justify-content-between">
            <h5>Others</h5>
            <div className="d-flex flex-column lh-lg">
              <a href="#" className="text-decoration-none list-item">Blog</a>
              <a href="#" className="text-decoration-none list-item">Careers</a>
              <a href="#" className="text-decoration-none list-item">FAQ</a>
              <a href="#" className="text-decoration-none list-item">Franchising</a>
              <a href="#" className="text-decoration-none list-item">For Employers</a>
              <a href="#" className="text-decoration-none list-item">For Schools & Organizations</a>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-between">
            <h5>Contact</h5>
            <p><a href="tel:18446253754" className="text-decoration-none">1 844-625-3754</a></p>
            <p><a href="mailto:info@makerkids.com" className="text-decoration-none">info@makerkids.com</a></p>
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