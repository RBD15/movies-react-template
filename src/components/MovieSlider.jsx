import React from 'react'
import { Link } from 'react-router-dom'
import '../css/slider.css';

const MovieSlider = ({movies}) => {
  return (
    // <div classNameName="slider movie-items">
    //   <div classNameName="container">
    //     <div classNameName="row">
    //       <div classNameName="social-link">
    //         <p>Follow us: </p>
    //         <a href="#"><i classNameName="ion-social-facebook"></i></a>
    //         <a href="#"><i classNameName="ion-social-twitter"></i></a>
    //         <a href="#"><i classNameName="ion-social-googleplus"></i></a>
    //         <a href="#"><i classNameName="ion-social-youtube"></i></a>
    //       </div>
    //         <div  classNameName="slick-multiItemSlider">
    //           {
    //             movies.map((movie) => {
    //               return (
    //                 <div classNameName="movie-item" key={movie.imdbID}>
    //                   <Link to={'/movie/'+movie.imdbID} classNameName="mv-img">
    //                     <img src={movie.Poster} alt="" width="285" height="437"/>
    //                   </Link>
    //                   <div classNameName="title-in">
    //                     <div classNameName="cate">
    //                       <span classNameName="blue"><a href="#">{movie.Type}</a></span>
    //                     </div>
    //                     <h6><a href="#" >{movie.Title}</a></h6>
    //                     <p><i classNameName="ion-android-star"></i><span>{movie.Year}</span></p>
    //                   </div>
    //                 </div>
    //               )
    //             })
    //           }
    //         </div>
    //       </div>
    //   </div>
    // </div>

  // <div className="slider movie-items">
  //   <div className="container">
  //     <div className="row">
  //       <div className="social-link">
  //         <p>Follow us: </p>
  //         <a href="#"><i className="ion-social-facebook"></i></a>
  //         <a href="#"><i className="ion-social-twitter"></i></a>
  //         <a href="#"><i className="ion-social-googleplus"></i></a>
  //         <a href="#"><i className="ion-social-youtube"></i></a>
  //       </div>
  //         <div  className="slick-multiItemSlider">
  //           <div className="movie-item">
  //             <div className="mv-img">
  //               <a href="#"><img src="images/uploads/slider1.jpg" alt="" width="285" height="437"/></a>
  //             </div>
  //             <div className="title-in">
  //               <div className="cate">
  //                 <span className="blue"><a href="#">Sci-fi</a></span>
  //               </div>
  //               <h6><a href="#">Interstellar</a></h6>
  //               <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
  //             </div>
  //           </div>
  //         <div className="movie-item">
  //             <div className="mv-img">
  //               <a href="#"><img src="images/uploads/slider2.jpg" alt="" width="285" height="437"/></a>
  //             </div>
  //             <div className="title-in">
  //               <div className="cate">
  //                 <span className="yell"><a href="#">action</a></span>
  //               </div>
  //               <h6><a href="#">The revenant</a></h6>
  //               <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
  //             </div>
  //           </div>
  //           <div className="movie-item">
  //             <div className="mv-img">
  //               <a href="#"><img src="images/uploads/slider3.jpg" alt="" width="285" height="437"/></a>
  //             </div>
  //             <div className="title-in">
  //               <div className="cate">
  //                 <span className="green"><a href="#">comedy</a></span>
  //               </div>
  //               <h6><a href="#">Die hard</a></h6>
  //               <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
  //             </div>
  //           </div>
  //           <div className="movie-item">
  //             <div className="mv-img">
  //               <a href="#"><img src="images/uploads/slider4.jpg" alt="" width="285" height="437"/></a>
  //             </div>
  //             <div className="title-in">
  //               <div className="cate">
  //                 <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
  //               </div>
  //               <h6><a href="#">The walk</a></h6>
  //               <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
  //             </div>
  //           </div>
  //           <div className="movie-item">
  //             <div className="mv-img">
  //               <a href="#"><img src="images/uploads/slider1.jpg" alt="" width="285" height="437"/></a>
  //             </div>
  //             <div className="title-in">
  //               <div className="cate">
  //                 <span className="blue"><a href="#">Sci-fi</a></span>
  //               </div>
  //               <h6><a href="#">Interstellar</a></h6>
  //               <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
  //             </div>
  //           </div>
  //         <div className="movie-item">
  //             <div className="mv-img">
  //               <a href="#"><img src="images/uploads/slider2.jpg" alt="" width="285" height="437"/></a>
  //             </div>
  //             <div className="title-in">
  //               <div className="cate">
  //                 <span className="yell"><a href="#">action</a></span>
  //               </div>
  //               <h6><a href="#">The revenant</a></h6>
  //               <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
  //             </div>
  //           </div>
  //           <div className="movie-item">
  //             <div className="mv-img">
  //               <img src="images/uploads/slider3.jpg" alt="" width="285" height="437"/>
  //             </div>
  //             <div className="title-in">
  //               <div className="cate">
  //                 <span className="green"><a href="#">comedy</a></span>
  //               </div>
  //               <h6><a href="#">Die hard</a></h6>
  //               <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
  //             </div>
  //           </div>
  //           <div className="movie-item">
  //             <div className="mv-img">
  //               <img src="images/uploads/slider4.jpg" alt="" width="285" height="437"/>
  //             </div>
  //             <div className="title-in">
  //               <div className="cate">
  //                 <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
  //               </div>
  //               <h6><a href="#">The walk</a></h6>
  //               <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
  //             </div>
  //           </div>
  //           <div className="movie-item">
  //             <div className="mv-img">
  //               <img src="images/uploads/slider3.jpg" alt="" width="285" height="437"/>
  //             </div>
  //             <div className="title-in">
  //               <div className="cate">
  //                 <span className="green"><a href="#">comedy</a></span>
  //               </div>
  //               <h6><a href="#">Die hard</a></h6>
  //               <p><i className="ion-android-star"></i><span>7.4</span> /10</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //   </div>
  // </div>

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
					 {/* <div className="carousel-item active">
						<div className="col-md-3">
							<div className="card">
								<div className="card-img">
									<img src="../images/uploads/slider1.jpg" className="img-fluid"/>
								</div>
								<div className="card-img-overlay">Slide 1</div>
							</div>
						</div>
					</div> 
          <div className="carousel-item">
						<div className="col-md-3">
							<div className="card">
								<div className="card-img">
									<img src="../images/uploads/slider1.jpg" className="img-fluid"/>
								</div>
								<div className="card-img-overlay">Slide 1</div>
							</div>
						</div>
					</div>  */}
          {movies.map((movie, index) => {
            return (
              <div className={(index === 0) ? 'carousel-item active' : 'carousel-item'} key={movie.imdbID}>
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-img">
                      <Link to={'/movie/'+movie.imdbID} >
                        <img src={movie.Poster} alt="" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="card-img-overlay">{movie.Tittle}</div>
                  </div>
                </div>
              </div>
            )
          })
          }

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
