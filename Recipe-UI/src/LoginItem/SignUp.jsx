import React, { useState } from 'react';
import {NavLink} from "react-router-dom"
import './signup.css';

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toggleAccount = () => {
    setIsLogin(!isLogin);
  };
  
const submit = (e) => {
  e.preventDefault();
  
  if (!email || !password) {
    alert('Please fill all the required fields');
    return; 
  }
}
  return (
    <div className="containrs">
      <form>
        <h2 className="title">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <h5>
          {isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
          <span onClick={toggleAccount} style={{ cursor: 'pointer', fontSize: '15px', color: 'blue' }}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </h5>

        <div className="social-login">
          <a href="https://www.facebook.com" className="btn social-btn">Facebook
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384053.png" alt="Facebook" />  
          </a>
          <a href="#" className="btn social-btn">Twitter
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384065.png" alt="Twitter" />  
          </a>
        </div>
        <div className='social-login'>
          <a href="#" className="btn social-btn">Google
            <img src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png" alt="Google" />
          </a>
          <a href="#" className="btn social-btn">LinkedIn
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384062.png" alt="LinkedIn" />
          </a>
        </div>

        <div className="divider">OR</div>
        <div className="manual-login">
          {!isLogin && <input type="text" placeholder="First Name" required />}
          {!isLogin && <input type="text" placeholder="Last Name" required />}
          <input type="text" placeholder="Email" required 
          onChange={(e) => setEmail(e.target.value)} 
          />
          <input type="password" placeholder="Password" required 
          onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <NavLink to="/ ">
        <button type="submit" className="btn login" onClick={submit}>{isLogin ? 'Login' : 'Sign Up'}</button>
        </NavLink>
      </form>
    </div>
  );
};

export default SignUp;
