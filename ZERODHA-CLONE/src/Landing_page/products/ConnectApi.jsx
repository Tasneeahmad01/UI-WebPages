import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const LeftSection = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row align-items-center">
        {/* Text on the left side */}
        <div className="col-md-6 d-flex flex-column p-5 gap-3 text-md-start">  
          <h2 className="mt-4 mb-0">Kite Connect API</h2> 
          <p className="mb-0 fs-6 fw-500">
            Build powerful trading platforms and <br/>experiences with our super simple <br /> HTTP/JSON APIs. If you are a startup, build <br />your investment app and showcase it to our <br /> client base.
          </p>
          <div className="d-flex mt-3 gap-5 ml-5">
            <a href="#" className="me-5 d-flex align-items-center text-decoration-none">
              Kite Connect
              <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </a>
          </div>
        </div>
        {/* Image on the right side */}
        <div className="col-md-6 text-center p-0">
          <a href="#">
            <img 
              src="https://zerodha.com/static/images/products-kiteconnect.png" 
              alt="Kite" 
              className="img-fluid" 
              style={{ marginBottom: '10px' }}   
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
