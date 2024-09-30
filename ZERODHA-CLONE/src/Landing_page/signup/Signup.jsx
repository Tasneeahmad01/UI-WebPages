import React from 'react';

const Signup = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row align-items-center mt-5">
        <div className="col-md-6 text-center">
          <a href="#">
            <img
              src="https://signup.zerodha.com/img/landing.46a77378.png"
              alt="Kite"
              className="img-fluid"
              style={{ marginBottom: '10px' }}
            />
          </a>
        </div>

        <div className="col-md-6 d-flex flex-column text-md-start" style={{ paddingLeft: "10%" }}>
          <h2 className="mb-2">Signup now</h2>
          <p className="text-muted">Or track your existing application.</p>
          <div className="mt-2 gap-5">
            <div className="input-group mb-2">
              <span className="input-group-text">+91</span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your mobile number"
                id="mobile"
              />
            </div>

            <p className="text-muted mt-4" style={{ fontSize: "13px" }}>
              You will receive an OTP on your number
            </p>
            <button className="btn btn-primary p-2">Continue</button>
          </div>
          <a href="#" className="text-decoration-none mt-2">
            Want to open an NRI account?
          </a>
        </div>
      </div>

      <p
        role="contentinfo"
        aria-label="Information Section"
        className="text-12 text-grey text-center mt-3 text-muted"
      >
        I authorize Zerodha to contact me even if my number is registered on DND. I authorize Zerodha to fetch my KYC information from the C-KYC registry with my PAN. <br />
        Please visit <a target="_blank" aria-label="KYC information Link" href="https://support.zerodha.com/category/console/reports/other-queries/articles/details-collected-when-opening-an-account" className="text-decoration-none">this article</a> to know more. <br /><br />
        If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a target="_blank" href="https://zerodha.com/resources" aria-label="Offline Forms Link" className="text-decoration-none">offline forms.</a> For help, <a target="_blank" href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening?language=english" aria-label="Help Link" className="text-decoration-none">click here.</a>
      </p>
    </div>
  );
};

export default Signup;
