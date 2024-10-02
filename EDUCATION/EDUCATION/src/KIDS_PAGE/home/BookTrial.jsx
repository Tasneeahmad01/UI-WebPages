import React from 'react';
import './BookTrial.css'; // Make sure to create this CSS file

function BookTrial() {
  return (
    <div className="book-trial-container"style={{marginTop:"50px"}}>
      <div className="form-heading mt-3 ">
        <h2>Book your Free Class.</h2>
        <p>Learn from India's best teachers.</p>
      </div>
      <form action="/apply-online" method="post" acceptCharset="UTF-8">
        <div className="form-group">
          <input
            name="mkt_name"
            type="text"
            required
            maxLength="50"
            placeholder="Name of your child"
          style={{borderRadius:"50px"}}/>
        </div>
        <div className="form-group mobile-field">
          <input
            required
            maxLength="10"
            placeholder="Mobile Number"
            style={{borderRadius:"50px"}}/>
          <button type="button"  className="otp-button bg-white border-none">Send OTP</button>
        </div>
        <div className="form-group">
          <input
            name="mkt_email_address"
            type="email"
            required
            placeholder="Email ID"
            style={{borderRadius:"50px"}}/>
        </div>
        <div className="form-group">
          <select required style={{borderRadius:"50px"}}>
            <option value="">Select State</option>
            <option value="Andaman & Nicobar Islands">Andaman & Nicobar Islands</option>
            {/* Add other states here */}
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <button type="submit " className="submit-button fw-bold fs-5">Try Now</button>
      </form>
    </div>
  );
}

export default BookTrial;
