import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

const Form = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_fkd5s1g',     
      'template_hul7n8a',     
      form.current,
      'RGfVgFnkg5e5puJLP'     
    )
    .then((result) => {
      console.log(result.text);
      setSubmitted(true);
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }} className="main-div">
      {submitted ? (
        <h2 className='order'>Your Order Finally Submitted</h2>
      ) : (
        <>
          <h2>Booking Order</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxWidth: '300px',
                margin: '0 auto',
              }}
              className="main"
            >
              <input type="text" name="name" placeholder="Enter your Name" className="form-control" required />
              <input type="email" name="email" placeholder="Enter your Email" className="form-control" required />
              <input type="text" name="title" placeholder="Subject Title" className="form-control" required />
              <textarea name="message" placeholder="Enter your message Contact" className="form-control" required />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: 'orange',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '20px',
                
              }}
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;
