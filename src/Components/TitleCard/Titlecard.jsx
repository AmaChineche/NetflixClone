import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import cards_data from '../../Card/Cards_data'
import { Link } from 'react-router-dom';

const Titlecard = ({title, category}) => {
    const [apiData, setApiData]= useState([]); 
    const cardsRef = useRef();
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzNlMjAxNWRkMTk0MjAyYzYwZjkxODVhZGRkY2Y2ZCIsIm5iZiI6MTczMzU2NTE2OS40MjU5OTk5LCJzdWIiOiI2NzU0MWFmMTg3MWE0MmM5YzI0NTVhOWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ttc5qtn158iSUglGgBwJRkYwkHuEcGP0v1ANJRAaNk0'
        }
      };
      
   
const handlewheel=(e)=>{
    e.preventDefault;
    cardsRef.current.scrollLeft += e.daltaY
}
useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

 cardsRef.current.addEventListener('wheel', handlewheel)
},[])
  return (
    <div className='Titlecard'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecard
