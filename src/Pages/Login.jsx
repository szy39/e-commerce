import React from 'react'
import "./CSS/Login.css"
const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" name="" id="" placeholder='Your Name' />
          <input type="email" name="" id="" placeholder='Your Email' />
          <input type="password" name="" id="" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='login-privacy'>Already have an account? <span>Login from here</span></p>
        <div className="login-agree">
          <input type="checkbox" name='' id='' />
          <p>I agree to the terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  )
}

export default Login