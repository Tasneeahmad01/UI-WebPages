import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const ContactTeam = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center bg-white">
        <div className="col-md-8 text-center">
          <h2 className="mb-4">Contact Us</h2>
          <p className="mb-5">We're here to help you with your programming journey. Fill out the form below and we'll get back to you as soon as possible!</p>
        </div>
      </div>
      
      <div className="row justify-content-center bg-white">
        <div className="col-md-8">
          <form>
            <div className="row mb-3 bg-white">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your Message"
                required
              />
            </div>
            <button type="submit" className="btn btn-warning text-white btn-lg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactTeam;
