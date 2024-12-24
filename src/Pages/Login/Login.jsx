import React, { useState } from 'react'
import './Login.css'
import { login, signUp } from '../../Firebase'
import netflixfvicon from '../../assets/netflixfavicon.jpg'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState]= useState("sign in");
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [loading, setLoading]= useState(false)
  const user_auth = async (event)=>{
    event.preventDefault()
    setLoading(true)
    if(signState==="sign in"){
      await login(email,password)
    }else{
      await signUp(name, email,password)
    }
    setLoading(false);
  }
  
  return (
    loading ? <div className="loading-spin" >
     <img src={netflix_spinner} alt="Loading....." />
    </div>: 
    <div className='login'>
      <img src={netflixfvicon} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState == "sign Up" ? <input value={name} onChange={(e)=>{
           setName(e.target.value)
          }} type="text" placeholder='your name' autoComplete="username" /> :<></> }
      
          <input value={email} onChange={(e)=>{ setEmail(
            e.target.value)
          }} type="email" placeholder='Email' autoComplete="email" />
          <input value={password} onChange={(e)=>{ setPassword(
            e.target.value)
          }} type="password" placeholder='password' autoComplete="current-password" />
          <button onClick={user_auth} type='submit'> {signState}</button>
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
