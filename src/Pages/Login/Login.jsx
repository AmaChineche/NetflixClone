import React, { useState } from 'react'
import './Login.css'
import netflixfvicon from '../../assets/netflixfavicon.jpg'

const Login = () => {
  const [signState, setSignState]= useState("sign in")
  return (
    <div className='login'>
      <img src={netflixfvicon} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState == "sign Up" ? <input type="text" placeholder='your name' /> :<></> }
      
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='password' />
          <button> {signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState == "sign in"?<p>New to Netflix ? <span onClick={()=>{setSignState("sign Up")}}>sign up now</span></p>:<p>Already have an account ? <span onClick={()=>{setSignState("sign in")}}>sign in now</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Login
