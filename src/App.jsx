import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Home  from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import { onAuthStateChanged} from 'firebase/auth'
import { auth        } from './Firebase'


function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged in")
        navigate('/')
      }else{
        console.log("Logged out")
        navigate('/login')

      }
    })
    return () => unsubscribe()
  },[navigate])



  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Player/:id' element={<Player/>}/>
    </Routes>
      
    </>
  )
}

export default App
