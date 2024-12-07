import React from 'react'
import './Navbar.css'
import netflixfvicon from '../../assets/netflixfavicon.jpg'
import search_icon from '../../assets/search_icon.svg'
import bell1 from '../../assets/bell1.png'
import profile from '../../assets/profile.png'
import caret from '../../assets/caret.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
    <img src={netflixfvicon} alt="" />
    <ul>
        <li>Home</li>
        <li>Tv Show</li>
        <li>Movies</li>
        <li>News &popular</li>
        <li>My List</li>
        <li>Browse by language</li>
        
    </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt=""  className='icons'/>
        <p>Children</p>
        <img src={bell1} alt="" className="bell"/>
            <div className="navbar-profile">
            <img src={profile} alt=""  className='profile'/>
            <img src={caret} alt="" className='caret' />
            <div className="dropdown">
                <p>sign out of Netflix</p>
            </div>
            </div>
    
      </div>
    </div>
  )
}

export default Navbar
