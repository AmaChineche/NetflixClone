import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icons">
            <img src={youtube} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
        </div>
      <ul>
        <li>
          Audio Description
        </li>
        <li>
          help centre
        </li>
        <li>
          Gift cards
        </li>
        <li>
         Media centre
        </li>
        <li>
          investor relations
        </li>
        <li>
          jobs
        </li>
        <li>
          terms and conditions
        </li>
        <li>
          privacy
        </li>
        <li>
          legal notices
        </li>
        <li>
          cookie preference
        </li>
        <li>
          corporate information 
        </li>
        <li>
          contact us
        </li>
      </ul>
      <p className='copyright-text'>c 1997-2024 Netflix, inc</p>
    </div>
  )
}

export default Footer
