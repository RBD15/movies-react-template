import React from 'react'

const MovieItem = () => {
  return (
    <div className="movie-item">
      <div className="mv-img">
        <a href="#"><img src={require('../images/uploads/slider1.jpg')} alt="" width="285" height="437"/></a>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="blue"><a href="#">Sci-fi</a></span>
        </div>
        <h6><a href="#">Interstellar</a></h6>
        <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
      </div>
    </div>
  )
}

export default MovieItem
