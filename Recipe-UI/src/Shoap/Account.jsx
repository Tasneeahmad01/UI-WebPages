import React, { useState } from 'react';


const Account = () => {
  const [addAccount, setAddAccount] = useState(false);

  const AddingAccount = (e) => {
    e.preventDefault();
    setAddAccount(true);
    alert("Account Created Successfully!");
  };

  return (
    <div className="account-wrapper">   {/* Center wrapper */}
      <div className="create-account-container">  
        <h2 className='head'>Create Account</h2>

        {addAccount ? (
          <p className="success-message">✅ Account Created Successfully!</p>
        ) : (
          <form onSubmit={AddingAccount}>
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

            <button type="submit" className="Butn">Create Account</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Account;
