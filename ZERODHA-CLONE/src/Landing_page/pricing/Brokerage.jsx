import React from 'react';

function Brokerage() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5">
          <div className="col-md-6 text-center">
            <h5>
              <a href="https://zerodha.com/brokerage-calculator#tab-equities" className="text-decoration-none text">Brokerage calculator</a>
            </h5>
          </div>
          <div className="col-md-6 text-center">
            <h5>
              <a href="https://zerodha.com/charges#tab-equities"className="text-decoration-none text">List of charges</a>
            </h5>
          </div>
        </div>
        <ul className="lh-lg text-muted mb-5" style={{fontSize:"12px"}}>
          <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
          <li>Digital contract notes will be sent via e-mail.</li>
          <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
          <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
          <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
          <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
        </ul>
      </div>
    </>
  );
}

export default Brokerage;
