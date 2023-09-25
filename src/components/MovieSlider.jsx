import React from 'react'
import { Link } from 'react-router-dom'
import '../css/slider.css';

const MovieSlider = ({movies}) => {
  return (
  <div className="slider movie-items">
    <div className="container text-center my-3">
      <div className="row mx-auto my-auto justify-content-center">
        <div className="social-link">
          <p>Follow us: </p>
          <a href="#"><i className="ion-social-facebook"></i></a>
          <a href="#"><i className="ion-social-twitter"></i></a>
          <a href="#"><i className="ion-social-googleplus"></i></a>
          <a href="#"><i className="ion-social-youtube"></i></a>
        </div>
        <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            {/* TODO: Improve active and not active card lists  */}
            <div className='carousel-item active'>
              {movies.map((movie, index) => {
                if(index<4){
                  return (
                    <div className="col-md-3" key={movie.imdbID}>
                        <Link to={'/movie/'+movie.imdbID} >
                        <div className="card">
                          <div className="card-img">
                            <img src={movie.Poster} alt="" className="img-fluid"/>
                          </div>
                          <div className="card-img-overlay">{movie.Tittle}</div>
                        </div>
                        </Link>
                      </div>
                  )
                }
              })}
            </div>
            <div className='carousel-item'>
              {movies.map((movie, index) => {
                if(index>3){
                  return (
                    <div className="col-md-3" key={movie.imdbID}>
                        <Link to={'/movie/'+movie.imdbID} >
                        <div className="card">
                          <div className="card-img">
                            <img src={movie.Poster} alt="" className="img-fluid"/>
                          </div>
                          <div className="card-img-overlay">{movie.Tittle}</div>
                        </div>
                        </Link>
                      </div>
                  )
                }
              })}
            </div>
          </div>
          <a className="carousel-control-prev bg-transparent w-auto" href="#recipeCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next bg-transparent w-auto" href="#recipeCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>		
    </div>
  </div>

  )
}

export default MovieSlider
