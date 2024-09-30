import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const LeftSection = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center p-0">
          <a href="#">
            <img 
              src="https://zerodha.com/static/images/products-kite.png" 
              alt="Kite" 
              className="img-fluid" 
              style={{ marginBottom: '10px' }}   
            />
          </a>
        </div>
        
        
        <div className="col-md-6 d-flex flex-column p-5 gap-3 pl-5 text-md-start">  
          <h1 className="mt-4 mb-0">Kite</h1> 
          <p className="mb-0">
            Our ultra-fast flagship trading platform with streaming market data, 
            advanced charts, an elegant UI, and more. Enjoy the Kite experience 
            seamlessly on your Android and iOS devices.
          </p>
          <div className="d-flex mt-3 gap-5">
            <a href="#" className="me-5 d-flex align-items-center text-decoration-none">
              Try demo <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </a>
            <a href="#" className="d-flex align-items-center text-decoration-none">
              Learn more <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </a>
          </div>
          <div className="d-flex mt-3 ">
            <a href="#" className="me-3">
              <img 
                src="https://zerodha.com/static/images/google-play-badge.svg" 
                alt="Google Play" 
                className="img-fluid"
              />
            </a>
            <a href="#">
              <img 
                src="https://zerodha.com/static/images/appstore-badge.svg" 
                alt="App Store" 
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
