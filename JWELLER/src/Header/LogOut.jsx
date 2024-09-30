import React from 'react';
import './LogOut.css';

function LogOut() {
  return (
    <div className="logout-container">
      <div className="logout-card">
      <img src="https://media.istockphoto.com/id/1411541255/photo/3d-business-woman-pointing-to-the-top-side-with-both-hands-3d-render-business-woman-character.jpg?s=612x612&w=0&k=20&c=sD0bH-9DSwjfa1J-iDT4E3oxzMzdPfj8TrsEK4jmKkQ=" alt="" />
        <h1>User LogOut</h1>
        <p>We hope to see you again soon!</p>
        <form className="logout-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="logout-button">Log Out</button>
        </form><br />
        <span>Login in with </span>
        <div className="icon">
         <a href=""><i class="fa-brands fa-google" style={{color:"green"}}></i></a>
         <a href=""> <i class="fa-brands fa-facebook-f"></i></a>
        </div>
      </div>
    </div>
  );
}

export default LogOut;
