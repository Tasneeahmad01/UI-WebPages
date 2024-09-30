
import React from 'react'
import './Login.css'
function Login() {
  return (
     
    <div class="Login">
        <div class="login-item">
            <h1>User Login Form</h1>
            <p>Join the world's largest community</p>
            <div class="profiles">
                <div class="profile">
                    <img src="https://media.istockphoto.com/id/1494370103/photo/indian-man-rubbing-temples-to-cure-headache-problem-suffering-from-tension-and-migaine-stress.webp?b=1&s=170667a&w=0&k=20&c=Wcf2D74BhSsCdEuzf5LTpbrp5881Z6p_NR8TAhGQdWk=" alt="Zain Sajid" />
                    <span>Zain Sajid</span>
                </div>
                <div class="profile">
                    <img src="https://media.istockphoto.com/id/485615034/photo/hes-got-the-right-attitude.webp?b=1&s=170667a&w=0&k=20&c=75Sp0Rydgx9mmHXqe1JNyeA3kDF4hUSesxODq0NzwMA=" alt="Moty Weiss" />
                    <span>Moty Weiss</span>
                </div>
                <div class="add-account">
                    <i class="fa-solid fa-plus"></i><br />
                    <button className='btn'>Add Account</button>
                </div>
            </div>
            <form class="login-form">
                <input type="text" placeholder="Phone number, username or email" required />
                <input type="password" placeholder="Password" required />
              <a href=""><button type="submit" className='Btn'>Sign in</button></a> 
               <a href=""><button type="button" className='Btnn'>Create New Account</button></a> 
                <div class="or-continue">
                    <span>Or continue with</span>
                </div>
                <div class="social-logins">
                 <a href=""> <button class="google">Google</button></a>
                 <a href=""> <button class="twitter">Twitter</button></a>
                 <a href=""> <button class="facebook">Facebook</button></a>
                </div>
            </form>
        </div>
    
    </div>
  )
}

export default Login




