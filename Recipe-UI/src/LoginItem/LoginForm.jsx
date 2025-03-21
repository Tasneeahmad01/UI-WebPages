import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Username or password cannot be empty');
    } else if (username == '' || password == '') {
      setError('Username or password incorrect');
    } else {
      setError('');
      alert('Login successful');
    }
  };

  const handleSocialLogin = (platform) => {
    setError('');
    alert(`Logged in successfully with ${platform}`);
  };

  return (
    <div className='containers'>
      <div className='cover'>
        <h1>Login</h1>
        <input
          type='text'
          placeholder='Enter UserName'
          className='input'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
         required
        />
        <input
          type='password'
          placeholder='Enter PassWord'
          className='input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         required
        />
        <div className='login-btn' onClick={handleLogin}>Login</div>
        <p className='text'>OR login using</p>
        <div className='alt-login'>
          <div className='facebook' onClick={() => handleSocialLogin('Facebook')}>
            <i className='fa-brands fa-facebook-f'></i>
          </div>
          <div className='google' onClick={() => handleSocialLogin('Google')}>
            <i className='fa-brands fa-google'></i>
          </div>
        </div>
        {error && <div className='error-message'>{error}</div>}
      </div>
      <img src="" alt="" />
    </div>
  );
};

export default LoginForm;
