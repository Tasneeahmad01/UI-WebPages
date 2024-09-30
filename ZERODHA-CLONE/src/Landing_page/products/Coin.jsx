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
              src="https://zerodha.com/static/images/products-coin.png" 
              alt="Coin" 
              className="img-fluid" 
              style={{ marginBottom: '10px' }}   
            />
          </a>
        </div>
        
        
        <div className="col-md-6 d-flex flex-column p-5 gap-3 pl-5 text-md-start">  
          <h2 className="mt-4 mb-0">Coin</h2> 
          <p className="mb-0 lh-lg">
          Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.
          </p>
          <div className="d-flex mt-3 gap-5">
            <a href="#" className="d-flex align-items-center text-decoration-none">
              Coin <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
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
                className="img-fluid "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
