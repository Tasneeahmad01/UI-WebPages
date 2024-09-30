import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Console = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center p-0 order-md-2">
          <a href="#">
            <img 
              src="https://zerodha.com/static/images/products-console.png" 
              alt="Console" 
              className="img-fluid" 
              style={{ marginBottom: '10px', }}   
            />
          </a>
        </div>
        
        <div className="col-md-6 d-flex flex-column p-5 gap-3 pr-5 text-md-start order-md-1">
          <h2 className="mt-4 mb-0">Console</h2>
          <p className="mb-0  lh-lg fw-500">
          The central dashboard for your Zerodha <br/>account. Gain insights into your trades and <br/>investments with in-depth reports and <br/>visualisations.
          </p>
          <div className="d-flex mt-2 gap-5 pr-5">
            <a href="#" className="d-flex align-items-center text-decoration-none">
              Learn more <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Console;
