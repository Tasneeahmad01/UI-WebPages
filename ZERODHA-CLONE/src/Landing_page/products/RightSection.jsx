import React from 'react';

const LeftSection = () => {
  return (
    <div className="row between v-align m-5 gap-5">
      <div className="col order-2">
        <h2>Varsity mobile</h2>
        <p className="mt-4 fs-6 lh-lg pl-5 pr-5">
          An easy to grasp, collection of stock market <br /> lessons with in-depth coverage and <br />illustrations. Content is broken down into <br />bite-size cards to help you learn on the go.
        </p>
        <div className="kite-mobile-links mt-2 p-2">
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
            className='p-2'
          >
            <img 
              src="https://zerodha.com/static/images/google-play-badge.svg" 
              alt="Google Play"
              className="img-fluid" 
              

            />
          </a>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
            className='p-2'
          >
            <img 
              src="https://zerodha.com/static/images/appstore-badge.svg" 
              alt="App Store"
              className="img-fluid" 
              
            />
          </a>
        </div>
      </div>
      <div className="col order-1 text-center">
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        >
          <img 
            src="https://zerodha.com/static/images/varsity-products.png" 
            alt="Varsity Mobile"
            className="img-fluid"
          />
        </a>
        
      </div>
    </div>
  );
};

export default LeftSection;

