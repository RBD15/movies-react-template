import React from 'react'
import '../css/trailersection.css'
import { Link } from 'react-router-dom'

const LatestNew = ({latestContent, title}) => {
  
  return (
    <div className="content">
      <h1 className="heading">Newest-{title}</h1>
      
      {latestContent.map((content)=>{
          return (
            <div className="cardTrailer" key={'latest'+content.imdbID}>
                <div className="frontWeb" style={{backgroundImage:`url(${content.Poster})`}}> 
                  {/* <p>{content.Title}</p> */}
                </div>
        
                <div className="back">
                  <div>
                    <div className="release_date">{content.Year}</div>
                    <div className="content_gens">{content.Title}</div>
                    {/* <div>⭐10</div> */}
                    
                    <p className="overview">Una gran pelicula menor</p>
                    <Link to={'/movie/'+content.imdbID} target="_blank" className="button">
                    Details
                    </Link>
                  </div>
                </div>
            </div>
          )
      })}


	  </div>
  )
}

export default LatestNew
