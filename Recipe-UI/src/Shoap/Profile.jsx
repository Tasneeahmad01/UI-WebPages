import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [color, setColor] = useState('black');

  const handleClick = (e) => {
    setColor(color === 'black' ? 'red' : 'black');
    setColor(e.target.value);
  };

  const name = "Tasneem Ahmed";
  const email = "tasneemahmad9761242460@gmail.com";
  const userid = "24B43c874";

  return (
    <div className='Container' style={{ marginTop: '60px' }}>
      <h2>My Profile</h2>
      <div className="prof">
        <img src="https://img.freepik.com/premium-photo/happy-indian-man-png-sticker-transparent-background_53876-1045632.jpg?w=740" alt="User Profile" />
        <h4>Name: {name}</h4>
        <p>Email: {email}</p>
        <p>User-ID: {userid}</p>
        <div className='payment'>
          <Link to="/account"><h5 style={{ color }} onClick={handleClick}>Account</h5></Link>
          <Link to="/paymentmethod"><h5 style={{ color }} onClick={handleClick}>Payment Method</h5></Link>
          <Link to="/history"><h5 style={{ color }} onClick={handleClick}>History</h5></Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
