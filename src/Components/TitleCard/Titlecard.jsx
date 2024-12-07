import React, { useEffect, useRef } from 'react'
import './TitleCard.css'
import cards_data from '../../Card/Cards_data'

const Titlecard = ({title, category}) => {
    const cardsRef = useRef();
const handlewheel=(e)=>{
    e.preventDefault;
    cardsRef.current.scrollLeft += e.daltaY
}
useEffect(()=>{
 cardsRef.current.addEventListener('wheel', handlewheel)
},[])
  return (
    <div className='Titlecard'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card,index)=>{
            return <div className="card" key={index}>
                <img src={card.image} alt="" />
                <p>{card.name}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default Titlecard
