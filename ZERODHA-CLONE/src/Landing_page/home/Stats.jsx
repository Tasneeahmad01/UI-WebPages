import React from 'react';

function Stats() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-6">
          <h1 className='mb-5 mt-5'>Trust with Confidence</h1>
          <h5 style={{ color: "#424242" }}>Customer-first always</h5>
          <p className='P2' style={{ color: "#666666", paddingBottom: "2rem" }}>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          <h5>No spam or gimmicks</h5>
          <p style={{ color: "#666666", paddingBottom: "2rem" }}>No gimmicks, spam, "gamification", or annoying push <br />
            notifications. High quality apps that you use at your <br />pace, the way you like.</p>
          <h5>The Zerodha universe</h5>
          <p style={{ color: "#666666", paddingBottom: "2rem" }}>Not just an app, but a whole ecosystem. Our <br />investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h5>Do better with money</h5>
          <p style={{ color: "#666666", paddingBottom: "2rem" }}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-6 mt-5">
          <a href="https://zerodha.com/products">
            <img src="https://zerodha.com/static/images/ecosystem.png" alt="" style={{ width: "100%" }} />
          </a>
          <div className="d-flex gap-3 mt-3">
            <a href="#" className="text-primary text-decoration-none">Explore our Products &nbsp; <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
            <a href="https://kite-demo.zerodha.com/dashboard" className="text-primary text-decoration-none">Try Kite demo &nbsp;<i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
