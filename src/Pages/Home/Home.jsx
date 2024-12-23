import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/navbar';
import heroImage from '../../assets/heroImage.jpg';
import hero_caption from '../../assets/hero_caption.jpeg'
import playicon from '../../assets/playicon.png'
import infoicon from '../../assets/infoicon.png'
import Titlecard from '../../Components/TitleCard/Titlecard';
import Footer from '../../Components/Footer/Footer';
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={heroImage} alt=""  className='heroBanner'/>
        <div className="hero-caption">
          <img src={hero_caption} alt="" className='caption' />
          <p>Discovering his ties to a secret ancient order, a young man living in mordern istanbul embarks on aquest to save the city from immortal enemy</p>
        <div className="hero-btns">
          <button className='btn'>
           <img src={playicon} alt="" className='playbtn'/>
           play
          </button>
          <button className='btn dark-btn'>
           <img src={infoicon} alt="" />
          more info
          </button>
         
        </div>
        <Titlecard/>
        </div>
      </div>
      <div className="more-cards">
      <Titlecard title={"blockbuster movies"} category={"top_rated"}/>
      <Titlecard title={"only on netflix"} category={"popular"}/>
      <Titlecard title={"upcoming"} category={"upcoming"}/>
      <Titlecard title={"top pics for yiu"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
