import HTMLReactParser from 'html-react-parser';
import React from 'react'

const MovieRaiting = ({rating}) => {

  return (
    <div className="movie-rate">
    <div className="rate">
      <i className="ion-android-star"></i>
      <p><span>{rating}</span><br/>
        <span className="rv">56 Reviews</span>
      </p>
    </div>
    <div className="rate-star">
      <p>Rate This Movie:  </p>
      {(()=>{
          let stars;
          for (let i = 0; i < 10; i++) {
            if(parseInt(rating)>=i){
              stars+=`<i className="ion-ios-star"></i>`;
            }else{
              stars+=`<i className="ion-ios-star-outline"></i>`;
            }
          }
          return HTMLReactParser(stars)
      })()}
    </div>
  </div>
  )
}

export default MovieRaiting
