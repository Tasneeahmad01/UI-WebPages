import React, { useState } from 'react';
import { FaGooglePay, FaAmazonPay, FaPaypal } from 'react-icons/fa';
import { SiPhonepe, SiPaytm } from 'react-icons/si';

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const methods = [
    { value: 'google-pay', 
      label: 'Google Pay', 
      icon: <FaGooglePay size={24} color="red" />,
     link: 'https://pay.google.com/' },
    { value: 'phonepe', 
      label: 'PhonePe', 
      icon: <SiPhonepe size={24} color="#5F259F" />, 
    link: 'https://www.phonepe.com/' },
    { value: 'paytm', 
      label: 'Paytm', 
      icon: <SiPaytm size={24} color="#00B9F5" />, 
    link: 'https://www.paytm.com/' },
    { value: 'amazon-pay', 
      label: 'Amazon Pay', 
      icon: <FaAmazonPay size={24} color="#FF9900" />, 
    link: 'https://www.amazon.in/amazonpay' },
    { value: 'paypal', 
      label: 'PayPal', 
      icon: <FaPaypal size={24} color="#00457C" />, 
    link: 'https://www.paypal.com/' }
  ];
  

  return (
    <div className='payment-method-container'>
      <h3>Select Payment Method</h3>
      <div className='payment-methods'>
        {methods.map(({ value, label, icon, link }) => (
          <a
            key={value}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='payment-label'
          >
            <input
              type='radio'
              value={value}
              checked={selectedMethod === value}
              onChange={handleChange}
            />
            {icon} {label}
          </a>
        ))}
      </div>
      <p>Selected Method: {selectedMethod || "None"}</p>
    </div>
  );
};

export default PaymentMethod;
