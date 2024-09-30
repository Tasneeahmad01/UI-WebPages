import React from 'react';
import './Universe.css'; 

function Universe() {
  return (
    <div className="container text-center ">
      <h5 style={{marginTop:"15%",marginBottom:"10%"}}>Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/" className='text-decoration-none'>Zerodha.tech</a> blog.</h5>
      <h2 className="mb-4">The Zerodha Universe</h2>
      <p className="mb-4">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row mt-5">
        <div className="col-md-4 mb-4 d-flex flex-column align-items-center ">
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.zerodhafundhouse.com/"
           
          >
            <img 
              className="zfh-logo img-fluid" 
              src="https://zerodha.com/static/images/partners/zerodhafundhouse.png" 
              alt="Zerodha Fund House" 
              style={{ width: "198px" }}
            />
            <p className="text-12 text-light-grey mt-2" style={{ fontSize: "0.9rem" }}>
              Our asset management venture <br />that is creating simple and transparent index <br />funds to help you save for your goals.
            </p>
          </a>
        </div>
        <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://sensibull.com"
           
          >
            <img 
              className="sensibull-logo img-fluid" 
              src="https://zerodha.com/static/images/products/sensibull-logo.svg" 
              alt="Sensibull" 
              style={{ width: "290px" }}
            />
            <p className="text-12 text-light-grey mt-2" style={{ fontSize: "0.9rem" }}>
              Options trading platform that lets you <br />create strategies, analyze positions, and examine <br />data points like open interest, FII/DII, and more.
            </p>
          </a>
        </div>
        <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.tijorifinance.com/"
           
          >
            <img 
              className="goldenpi-logo img-fluid" 
              src="https://zerodha.com/static/images/partners/tijori.svg" 
              alt="Tijori Finance" 
              style={{ width: "150px" }}
            />
            <p className="text-12 text-light-grey mt-2" style={{ fontSize: "0.9rem" }}>
              Investment research platform <br />that offers detailed insights on stocks, <br />sectors, supply chains, and more.
            </p>
          </a><br />
        </div>
        <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://streak.tech"
            
          >
            <img 
              className="streak-logo img-fluid" 
              src="https://zerodha.com/static/images/products/streak-logo.png" 
              alt="Streak" 
              style={{ width: "170px" }}
            />
            <p className="text-12 text-light-grey mt-2" style={{ fontSize: "0.9rem" }}>
              Systematic trading platform <br />that allows you to create and backtest <br />strategies without coding.
            </p>
          </a>
        </div>
        <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://smallcase.zerodha.com"
          >
            <img 
              className="smallcase-logo img-fluid" 
              src="https://zerodha.com/static/images/products/smallcase-logo.png" 
              alt="Smallcase" 
              style={{ width: "150px" }}
            />
            <p className="text-12 text-light-grey mt-2" style={{ fontSize: "0.9rem" }}>
              Thematic investing platform <br />that helps you invest in diversified <br />baskets of stocks or ETFs.
            </p>
          </a>
        </div>
        <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://joinditto.in/"
           
          >
            <img 
              className="ditto-logo img-fluid" 
              src="https://zerodha.com/static/images/products/ditto-logo.png" 
              alt="Ditto" 
              style={{ width: "150px" }}
            />
            <p className="text-12 text-light-grey mt-2" style={{ fontSize: "0.9rem" }}>
              Personalized advice on life <br />and health insurance. No spam <br />and no mis-selling.
            </p>
          </a>
        </div>
      </div>
      <a href="#">
        <button className="btn btn-primary mt-4 fs-5 mb-5 fw-500 p-3 m-3">Sign up for free</button>
      </a>
    </div>
  );
}

export default Universe;
