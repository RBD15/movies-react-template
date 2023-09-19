import React from 'react'
import '../css/trailersection.css'

const Movies = () => {
  
  return (

    <div className="content">
      <h1 className="heading">Movies-</h1>
      <div className="cardTrailer" >
        <div className="frontWeb" style={{backgroundImage:`url("https://picsum.photos/500")`}}> 
          <p>Matrix</p>
        </div>

        <div className="back">
          <div>
            <div className="release_date">Matrix <span>Something</span></div>
            <div className="movie_gens">Action</div>
            <div>⭐10</div>
            
            <p className="overview">Una gran pelicula menor</p>
            <a target="_blank" href="#" className="button">Details</a>
          </div>
        </div>

      </div>

        <div className="cardTrailer" >
        <div className="frontWeb" style={{backgroundImage:`url("https://picsum.photos/500")`}}> 
          <p>Matrix II</p>
        </div>

        <div className="back">
          <div>
            <div className="release_date">Matrix II<span>2023</span></div>
            <div className="movie_gens">Action</div>
            <div>⭐10</div>
            
            <p className="overview">Una casi gran pelicula</p>
            <a target="_blank" href="" className="button">Details</a>
          </div>
        </div>

      </div>

      <div className="cardTrailer" >
        <div className="frontWeb" style={{backgroundImage:`url("https://picsum.photos/500")`}}> 
          <p>Matrix II</p>
        </div>

        <div className="back">
          <div>
            <div className="release_date">Matrix II<span>2023</span></div>
            <div className="movie_gens">Action</div>
            <div>⭐10</div>
            
            <p className="overview">Una casi gran pelicula</p>
            <a target="_blank" href="" className="button">Details</a>
          </div>
        </div>

      </div>
	  </div>
  )
}

export default Movies
