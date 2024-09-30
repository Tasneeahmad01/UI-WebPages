import React from 'react';

function Hero() {
  return (
    <div className="faq-sections faq-head-section" style={{ backgroundColor: "#0096c7" }}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 col-lg-3 text-center text-md-start mt-5">
            <h5 className="support-logo">
              <a href="/" className="text-decoration-none p-5" style={{ color: "white" }}>Support Portal</a>
            </h5>
          </div>
          <div className="col-md-6 col-lg-4 text-md-end text-center">
            <a className="kite-login" href="/login" style={{ color: "white" }}>Track tickets</a>
          </div>
        </div>

        <div className="row align-items-center justify-content-between mt-4">
          <div className="col-lg-7 col-md-12 mt-4">
            <h4 className="support-subheading" style={{ color: "white" }}>Search for an answer or browse help topics to create a ticket</h4>
            <div className="input-group mt-4">
              <input type="text" className="form-control p-3" placeholder="Eg: how do I activate F&O..." />
              <span className="input-group-text p-3">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>

            <div className="d-flex gap-2 p-2 mb-5">
              {['Track account opening', 'Track segment activation', 'Intraday margins', 'Kite user manual'].map((text, idx) => (
                <p key={idx} className="quick-links">
                  <a href="#" style={{ color: "white" }}>{text}</a>
                </p>
              ))}
            </div>
          </div>

          <div className="col-lg-5 col-md-12 mt-4 mt-lg-0">
            <div className="alert-banner">
              <h4 style={{ color: "white" }}>Featured</h4>
              <div className="alert-back">
                <div className="banner-content">
                  <ol className="lh-lg" style={{ color: "white" }}>
                    {['Offer for sale (OFS) - September 2024', 'Latest Intraday leverages and Square-off timings'].map((item, idx) => (
                      <li key={idx}><a href="#" style={{ color: "white" }}>{item}</a></li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="listDom"></div>
      </div>
    </div>
  );
}

export default Hero;
