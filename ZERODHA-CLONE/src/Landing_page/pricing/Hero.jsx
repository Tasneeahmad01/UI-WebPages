import React from 'react';

function Hero() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 border-bottom">
          <h1 className="mt-5 text-center hero-heading">Pricing</h1>
          <h5 className="mt-2 mb-5 text-center">
            Free equity investments and flat ₹20 intraday and F&O trades
          </h5>
        </div>
        <div className="row p-5 mt-5">
          <div className="col-md-4 d-flex flex-column align-items-center text-center">
          <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="" style={{width:"250px"}}/>
            <h3 className="hero-heading">Free equity delivery</h3>
            <ul className=" mt-4 hero-list">
              <p className="lh-lg">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
              
            </ul>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center text-center">
          <img src="https://zerodha.com/static/images/other-trades.svg" alt="" style={{width:"250px"}}/>
            <h3 className="hero-heading">Intraday and F&O trades</h3>
            <ul className=" mt-4 hero-list">
              <p className="lh-lg">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </ul>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center text-center">
          <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="" style={{width:"250px"}}/>
            <h3 className="hero-heading">Free direct MF</h3>
            <ul className=" mt-4 hero-list">
            <p className="lh-lg">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
