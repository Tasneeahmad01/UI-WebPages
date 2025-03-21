import React from 'react';
// import './CreateAccount.css';

const  Account = () => {
  return (
    <div className="create-account-container">
      <h2>Create Account</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Create a password" required />
        </div>
        <button type="submit" className="create-account-btn">Create Account</button>
      </form>
    </div>
  );
};

export default  Account;
