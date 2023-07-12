import React from 'react'
import { Link } from 'react-router-dom'

const MovieSlider = ({movies}) => {
  return (
    <div className="slider movie-items">
      <div className="container">
        <div className="row">
          <div className="social-link">
            <p>Follow us: </p>
            <a href="#"><i className="ion-social-facebook"></i></a>
            <a href="#"><i className="ion-social-twitter"></i></a>
            <a href="#"><i className="ion-social-googleplus"></i></a>
            <a href="#"><i className="ion-social-youtube"></i></a>
          </div>
            <div  className="slick-multiItemSlider">
              {
                movies.map((movie) => {
                  return (
                    <div className="movie-item" key={movie.imdbID}>
                      <Link to={'/movie/'+movie.imdbID} className="mv-img">
                        <img src={movie.Poster} alt="" width="285" height="437"/>
                      </Link>
                      <div className="title-in">
                        <div className="cate">
                          <span className="blue"><a href="#">{movie.Type}</a></span>
                        </div>
                        <h6><a href="#">{movie.Title}</a></h6>
                        <p><i className="ion-android-star"></i><span>{movie.Year}</span></p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
      </div>
    </div>
  )
}

export default MovieSlider
