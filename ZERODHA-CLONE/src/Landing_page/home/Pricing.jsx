import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-4">
          <h2 className="mb-3">Unbeatable pricing</h2>
          <p className="mt-4">
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none fw-400" style={{color:"#387ED1"}}>
            See Pricing <i className="fa-solid fa-arrow-right-long pl-2"></i>
          </a>
        </div>
        <div className="col-md-8">
          <div className="row ">
            <div className="col-md-4 d-flex flex-row align-items-center text-center">
              <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="" style={{width:"150px"}}/>
              <p style={{fontSize:"11px"}} className="">Free account <br /> opening</p>
            </div>
            <div className="col-md-4 d-flex flex-row align-items-center text-center">
            <img src="https://zerodha.com/static/images/pricing-eq.svg" alt="" style={{width:"150px"}}/>
             <p style={{fontSize:"11px"}}>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-md-4 d-flex flex-row align-items-center text-center">
            <img src="https://zerodha.com/static/images/other-trades.svg" alt="" style={{width:"150px"}}/>
              <p style={{fontSize:"11px"}}>Intraday and <br />F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
