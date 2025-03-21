import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [orderSubmit, setOrderSubmit] = useState(false);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setOrderSubmit();
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '50px',  }} className='main-div'>
            {orderSubmit ? (
                <h2>Your Order Finally Submitted</h2>
            ) : (
                <>
                    <h2>Booking Order</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '0 auto' }} className='main'>
                            <input 
                                type="text"
                                name="name"
                                placeholder='Enter your Name'
                                className="form-control"
                                required
                            />
                            <input 
                                type="email"
                                name="email"
                                placeholder='Enter your Email'
                                className="form-control"
                                required
                            />
                            <input 
                                type="text"
                                name="number"
                                placeholder='Enter your Number'
                                className="form-control"
                                required
                            />
                            <input 
                                type="text"
                                name="zipCode"
                                placeholder='Enter your Zip Code'
                                className="form-control"
                                required
                            />
                        </div>
                        <button 
                            type="submit"
                            style={{ backgroundColor: 'orange', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}
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
