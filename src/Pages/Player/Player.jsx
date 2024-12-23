import React from 'react'
import './Player.css'
import backArrow from '../../assets/backArrow.png/'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();
const [apiData, setApiData]= useState({
  name:"",
  key:"",
  published_at:"",
  typeof:""
})
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzNlMjAxNWRkMTk0MjAyYzYwZjkxODVhZGRkY2Y2ZCIsIm5iZiI6MTczMzU2NTE2OS40MjU5OTk5LCJzdWIiOiI2NzU0MWFmMTg3MWE0MmM5YzI0NTVhOWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ttc5qtn158iSUglGgBwJRkYwkHuEcGP0v1ANJRAaNk0'
    }
  };
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(Response.result[0]))
    .catch(err => console.error(err));
    },[])
  
  
  return (
    <div className='player'>
    <img src={backArrow} alt="" onClick={()=>{navigate(-2)}}/> {/* Self-closing img tag */}
    <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} 
      title='trailer' frameBorder='0' allowFullScreen></iframe> {/* Corrected src URL */}
    <div className="player-inform">
      <p>{apiData.publish_at}</p> {/* Assuming you want to display the actual value */}
    </div>
  </div>
  
  )
}

export default Player
