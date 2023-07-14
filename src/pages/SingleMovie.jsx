import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovie } from '../hooks/useMovies'
import Preloader from '../components/Preloader'
import { useDispatch, useSelector } from 'react-redux'

const SingleMovie = () => {
  const {imdbId} = useParams()

  const [movieInfo,setMovieInfo] = useState({})
  const store = useSelector((store) => store)
  const dispatch = useDispatch()

  const getMovieInfo = async () => {
    const result = await getMovie(imdbId);
    setMovieInfo(result.data);
  }
  
  const isFavorite = () => {
    const result = store.favorite.movies.filter((movieFavorite) => {
    if(movieFavorite.imdbID === movieInfo.imdbID)
      return movieFavorite
    })
    return result.length !== 0
  }

  const toggleFavorite = (e) => {
    e.preventDefault()

    if (!isFavorite()){
      console.log('Add')
      dispatch({
        type: 'addFavorite',
        payload: movieInfo
      })
    }else{
      console.log('Remove')
      dispatch({
        type: 'removeFavorite',
        payload: movieInfo.imdbID
      })
    }
  }

  useEffect(() => {
    getMovieInfo()
  }, [movieInfo])

  return (
      ( () => {
        if(movieInfo.Title === undefined){
          return (<Preloader></Preloader>)
        }else{
          return (<Fragment>
            <div className="hero mv-single-hero">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    {/* <h1> movie listing - list</h1>
                    <ul className="breadcumb">
                      <li className="active"><a href="#">Home</a></li>
                      <li> <span className="ion-ios-arrow-right"></span> movie listing</li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="page-single movie-single movie_single">
              <div className="container">
                <div className="row ipad-width2">
                  <div className="col-md-4 col-sm-12 col-xs-12">
                    <div className="movie-img sticky-sb">
                      <img src={movieInfo.Poster} alt=""/>
                      <div className="movie-btn">	
                        <div className="btn-transform transform-vertical red">
                          <div><a href="www.google.com" className="item item-1 redbtn"> <i className="ion-play"></i> Watch Trailer</a></div>
                          <div><a href="https://www.youtube.com/embed/o-0hcF97wy0" className="item item-2 redbtn fancybox-media hvr-grow"><i className="ion-play"></i></a></div>
                        </div>
                        <div className="btn-transform transform-vertical">
                          <div><a href="www.google.com" className="item item-1 yellowbtn"> <i className="ion-card"></i> Buy ticket</a></div>
                          <div><a href="www.google.com" className="item item-2 yellowbtn"><i className="ion-card"></i></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-12 col-xs-12">
                    <div className="movie-single-ct main-content">
                      <h1 className="bd-hd">{movieInfo.Title}<span>{movieInfo.Year}</span></h1>
                      <div className="social-btn">
                        <a href="#" className="parent-btn"  ><i className="ion-heart" onClick={toggleFavorite}></i> Add to Favorite</a>
                        <div className="hover-bnt">
                          <a href="www.google.com" className="parent-btn"><i className="ion-android-share-alt"></i>share</a>
                          <div className="hvr-item">
                            <a href="www.google.com" className="hvr-grow"><i className="ion-social-facebook"></i></a>
                            <a href="www.google.com" className="hvr-grow"><i className="ion-social-twitter"></i></a>
                            <a href="www.google.com" className="hvr-grow"><i className="ion-social-googleplus"></i></a>
                            <a href="www.google.com" className="hvr-grow"><i className="ion-social-youtube"></i></a>
                          </div>
                        </div>		
                      </div>
                      <div className="movie-rate">
                        <div className="rate">
                          <i className="ion-android-star"></i>
                          <p><span>{movieInfo.Ratings[0].value}</span><br/>
                            <span className="rv">56 Reviews</span>
                          </p>
                        </div>
                        <div className="rate-star">
                          <p>Rate This Movie:  </p>
                          <i className="ion-ios-star"></i>
                          <i className="ion-ios-star"></i>
                          <i className="ion-ios-star"></i>
                          <i className="ion-ios-star"></i>
                          <i className="ion-ios-star"></i>
                          <i className="ion-ios-star"></i>
                          <i className="ion-ios-star"></i>
                          <i className="ion-ios-star"></i>
                          <i className="ion-ios-star-outline"></i>
                        </div>
                      </div>
                      <div className="movie-tabs">
                        <div className="tabs">
                          <ul className="tab-links tabs-mv">
                            <li className="active"><a href="#overview">Overview</a></li>
                            <li><a href="#reviews"> Reviews</a></li>
                            <li><a href="#cast">  Cast & Crew </a></li>
                            <li><a href="#media"> Media</a></li> 
                            <li><a href="#moviesrelated"> Related Movies</a></li>                        
                          </ul>
                            <div className="tab-content">
                                <div id="overview" className="tab active">
                                    <div className="row">
                                      <div className="col-md-8 col-sm-12 col-xs-12">
                                        <p>Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.</p>
                                        <div className="title-hd-sm">
                                    <h4>Videos & Photos</h4>
                                    <a href="www.google.com" className="time">All 5 Videos & 245 Photos <i className="ion-ios-arrow-right"></i></a>
                                  </div>
                                  <div className="mvsingle-item ov-item">
                                    <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image11.jpg" ><img src={require("../images/uploads/image1.jpg")} alt=""/></a>
                                    <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image21.jpg" ><img src={require("../images/uploads/image2.jpg")} alt=""/></a>
                                    <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image31.jpg" ><img src={require("../images/uploads/image3.jpg")} alt=""/></a>
                                    <div className="vd-it">
                                      <img className="vd-img" src={require("../images/uploads/image4.jpg")} alt=""/>
                                      <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src={require("../images/uploads/play-vd.png")} alt=""/></a>
                                    </div>
                                  </div>
                                  <div className="title-hd-sm">
                                    <h4>cast</h4>
                                    <a href="www.google.com" className="time">Full Cast & Crew  <i className="ion-ios-arrow-right"></i></a>
                                  </div>
                                  <div className="mvcast-item">											
                                    <div className="cast-it">
                                      <div className="cast-left">
                                        <img src={require("../images/uploads/cast1.jpg")} alt=""/>
                                        <a href="www.google.com">Robert Downey Jr.</a>
                                      </div>
                                      <p>...  Robert Downey Jr.</p>
                                    </div>
                                    <div className="cast-it">
                                      <div className="cast-left">
                                        <img src={require("../images/uploads/cast2.jpg")} alt=""/>
                                        <a href="www.google.com">Chris Hemsworth</a>
                                      </div>
                                      <p>...  Thor</p>
                                    </div>
                                    <div className="cast-it">
                                      <div className="cast-left">
                                        <img src={require("../images/uploads/cast3.jpg")} alt=""/>
                                        <a href="www.google.com">Mark Ruffalo</a>
                                      </div>
                                      <p>...  Bruce Banner/ Hulk</p>
                                    </div>
                                    <div className="cast-it">
                                      <div className="cast-left">
                                        <img src={require("../images/uploads/cast4.jpg")} alt=""/>
                                        <a href="www.google.com">Chris Evans</a>
                                      </div>
                                      <p>...  Steve Rogers/ Captain America</p>
                                    </div>
                                    <div className="cast-it">
                                      <div className="cast-left">
                                        <img src={require("../images/uploads/cast5.jpg")} alt=""/>
                                        <a href="www.google.com">Scarlett Johansson</a>
                                      </div>
                                      <p>...  Natasha Romanoff/ Black Widow</p>
                                    </div>
                                    <div className="cast-it">
                                      <div className="cast-left">
                                        <img src={require("../images/uploads/cast6.jpg")} alt=""/>
                                        <a href="www.google.com">Jeremy Renner</a>
                                      </div>
                                      <p>...  Clint Barton/ Hawkeye</p>
                                    </div>
                                    <div className="cast-it">
                                      <div className="cast-left">
                                        <img src={require("../images/uploads/cast7.jpg")} alt=""/>
                                        <a href="www.google.com">James Spader</a>
                                      </div>
                                      <p>...  Ultron</p>
                                    </div>
                                    <div className="cast-it">
                                      <div className="cast-left">
                                        <img src={require("../images/uploads/cast9.jpg")} alt=""/>
                                        <a href="www.google.com">Don Cheadle</a>
                                      </div>
                                      <p>...  James Rhodes/ War Machine</p>
                                    </div>
                                  </div>
                                  <div className="title-hd-sm">
                                    <h4>User reviews</h4>
                                    <a href="www.google.com" className="time">See All 56 Reviews <i className="ion-ios-arrow-right"></i></a>
                                  </div>
                                  <div className="mv-user-review-item">
                                    <h3>Best Marvel movie in my opinion</h3>
                                    <div className="no-star">
                                      <i className="ion-android-star"></i>
                                      <i className="ion-android-star"></i>
                                      <i className="ion-android-star"></i>
                                      <i className="ion-android-star"></i>
                                      <i className="ion-android-star"></i>
                                      <i className="ion-android-star"></i>
                                      <i className="ion-android-star"></i>
                                      <i className="ion-android-star"></i>
                                      <i className="ion-android-star"></i>
                                      <i className="ion-android-star last"></i>
                                    </div>
                                    <p className="time">
                                      17 December 2016 by <a href="www.google.com"> hawaiipierson</a>
                                    </p>
                                    <p>This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.</p>
                                  </div>
                                      </div>
                                      <div className="col-md-4 col-xs-12 col-sm-12">
                                        <div className="sb-it">
                                          <h6>Director: </h6>
                                          <p><a href="www.google.com">Joss Whedon</a></p>
                                        </div>
                                        <div className="sb-it">
                                          <h6>Writer: </h6>
                                          <p><a href="www.google.com">Joss Whedon,</a> <a href="www.google.com">Stan Lee</a></p>
                                        </div>
                                        <div className="sb-it">
                                          <h6>Stars: </h6>
                                          <p><a href="www.google.com">Robert Downey Jr,</a> <a href="www.google.com">Chris Evans,</a> <a href="www.google.com">Mark Ruffalo,</a><a href="www.google.com"> Scarlett Johansson</a></p>
                                        </div>
                                        <div className="sb-it">
                                          <h6>Genres:</h6>
                                          <p><a href="www.google.com">Action, </a> <a href="www.google.com"> Sci-Fi,</a> <a href="www.google.com">Adventure</a></p>
                                        </div>
                                        <div className="sb-it">
                                          <h6>Release Date:</h6>
                                          <p>May 1, 2015 (U.S.A)</p>
                                        </div>
                                        <div className="sb-it">
                                          <h6>Run Time:</h6>
                                          <p>141 min</p>
                                        </div>
                                        <div className="sb-it">
                                          <h6>MMPA Rating:</h6>
                                          <p>PG-13</p>
                                        </div>
                                        <div className="sb-it">
                                          <h6>Plot Keywords:</h6>
                                          <p className="tags">
                                            <span className="time"><a href="www.google.com">superhero</a></span>
                                            <span className="time"><a href="www.google.com">marvel universe</a></span>
                                            <span className="time"><a href="www.google.com">comic</a></span>
                                            <span className="time"><a href="www.google.com">blockbuster</a></span>
                                            <span className="time"><a href="www.google.com">final battle</a></span>
                                          </p>
                                        </div>
                                        <div className="ads">
                                    <img src={require("../images/uploads/ads1.png")} alt=""/>
                                  </div>
                                      </div>
                                    </div>
                                </div>
                                <div id="reviews" className="tab review">
                                  <div className="row">
                                      <div className="rv-hd">
                                        <div className="div">
                                          <h3>Related Movies To</h3>
                                        <h2>Skyfall: Quantum of Spectre</h2>
                                        </div>
                                        <a href="www.google.com" className="redbtn">Write Review</a>
                                      </div>
                                      <div className="topbar-filter">
                                  <p>Found <span>56 reviews</span> in total</p>
                                  <label>Filter by:</label>
                                  <select>
                                    <option value="popularity">Popularity Descending</option>
                                    <option value="popularity">Popularity Ascending</option>
                                    <option value="rating">Rating Descending</option>
                                    <option value="rating">Rating Ascending</option>
                                    <option value="date">Release date Descending</option>
                                    <option value="date">Release date Ascending</option>
                                  </select>
                                </div>
                                <div className="mv-user-review-item">
                                  <div className="user-infor">
                                    <img src={require("../images/uploads/userava1.jpg")} alt=""/>
                                    <div>
                                      <h3>Best Marvel movie in my opinion</h3>
                                      <div className="no-star">
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star last"></i>
                                      </div>
                                      <p className="time">
                                        17 December 2016 by <a href="www.google.com"> hawaiipierson</a>
                                      </p>
                                    </div>
                                  </div>
                                  <p>This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.</p>
                                </div>
                                <div className="mv-user-review-item">
                                  <div className="user-infor">
                                    <img src={require("../images/uploads/userava2.jpg")} alt=""/>
                                    <div>
                                      <h3>Just about as good as the first one!</h3>
                                      <div className="no-star">
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                      </div>
                                      <p className="time">
                                        17 December 2016 by <a href="www.google.com"> hawaiipierson</a>
                                      </p>
                                    </div>
                                  </div>
                                  <p>Avengers Age of Ultron is an excellent sequel and a worthy MCU title! There are a lot of good and one thing that feels off in my opinion. </p>
      
                                  <p>THE GOOD:</p>
      
                                  <p>First off the action in this movie is amazing, to buildings crumbling, to evil blue eyed robots tearing stuff up, this movie has the action perfectly handled. And with that action comes visuals. The visuals are really good, even though you can see clearly where they are through the movie, but that doesn't detract from the experience. While all the CGI glory is taking place, there are lovable characters that are in the mix. First off the original characters, Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye, are just as brilliant as they are always. And Joss Whedon fixed my main problem in the first Avengers by putting in more Hawkeye and him more fleshed out. Then there is the new Avengers, Quicksilver, Scarletwich, and Vision, they are pretty cool in my opinion. Vision in particular is pretty amazing in all his scenes.</p>
      
                                  <p>THE BAD:</p>
      
                                  <p>The beginning of the film it's fine until towards the second act and there is when it starts to feel a little rushed. Also I do feel like there are scenes missing but there was talk of an extended version on Blu-Ray so that's cool.</p>
                                </div>
                                <div className="mv-user-review-item">
                                  <div className="user-infor">
                                    <img src={require("../images/uploads/userava3.jpg")} alt=""/>
                                    <div>
                                      <h3>One of the most boring exepirences from watching a movie</h3>
                                      <div className="no-star">
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star last"></i>
                                        <i className="ion-android-star last"></i>
                                        <i className="ion-android-star last"></i>
                                        <i className="ion-android-star last"></i>
                                        <i className="ion-android-star last"></i>
                                        <i className="ion-android-star last"></i>
                                        <i className="ion-android-star last"></i>
                                        <i className="ion-android-star last"></i>
                                        <i className="ion-android-star last"></i>
                                      </div>
                                      <p className="time">
                                        26 March 2017 by<a href="www.google.com"> christopherfreeman</a>
                                      </p>
                                    </div>
                                  </div>
                                  <p>I can't right much... it's just so forgettable...Okay, from what I remember, I remember just sitting down on my seat and waiting for the movie to begin. 5 minutes into the movie, boring scene of Tony Stark just talking to his "dead" friends saying it's his fault. 10 minutes in: Boring scene of Ultron and Jarvis having robot space battles(I dunno:/). 15 minutes in: I leave the theatre.2nd attempt at watching it: I fall asleep. What woke me up is the next movie on Netflix when the movie was over.</p>
      
                                  <p>Bottemline: It's boring...</p>
      
                                  <p>10/10 because I'm a Marvel Fanboy</p>
                                </div>
                                <div className="mv-user-review-item ">
                                  <div className="user-infor">
                                    <img src={require("../images/uploads/userava4.jpg")} alt=""/>
                                    <div>
                                      <h3>That spirit of fun</h3>
                                      <div className="no-star">
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star last"></i>
                                        <i className="ion-android-star last"></i>
                                        <i className="ion-android-star last"></i>
                                        <i className="ion-android-star last"></i>
                                      </div>
                                      <p className="time">
                                        26 March 2017 by <a href="www.google.com"> juliawest</a>
                                      </p>
                                    </div>
                                  </div>
                                  <p>If there were not an audience for Marvel comic heroes than clearly these films would not be made, to answer one other reviewer although I sympathize with him somewhat. The world is indeed an infinitely more complex place than the world of Marvel comics with clearly identifiable heroes and villains. But I get the feeling that from Robert Downey, Jr. on down the organizer and prime mover as Iron Man behind the Avengers these players do love doing these roles because it's a lot of fun. If they didn't show that spirit of fun to the audience than these films would never be made.</p>
      
                                  <p>So in that spirit of fun Avengers: Age Of Ultron comes before us and everyone looks like they're having a good time saving the world. A computer program got loose and took form in this dimension named Ultron and James Spader who is completely unrecognizable is running amuck in the earth. No doubt Star Trek fans took notice that this guy's mission is to cleanse the earth much like that old earth probe NOMAD which got its programming mixed up in that classNameic Star Trek prime story. Wouldst Captain James T. Kirk of the Enterprise had a crew like Downey has at his command.</p>
                                  <p>My favorite is always Chris Evans because of the whole cast he best gets into the spirit of being a superhero. Of all of them, he's already played two superheroes, Captain America and Johnny Storm the Human Torch. I'll be before he's done Evans will play a couple of more as long as the money's good and he enjoys it.</p>
      
                                  <p>Pretend you're a kid again and enjoy, don't take it so seriously.</p>
                                </div>
                                <div className="mv-user-review-item last">
                                  <div className="user-infor">
                                    <img src={require("../images/uploads/userava5.jpg")} alt=""/>
                                    <div>
                                      <h3>Impressive Special Effects and Cast</h3>
                                      <div className="no-star">
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star"></i>
                                        <i className="ion-android-star last"></i>
                                        <i className="ion-android-star last"></i>
                                      </div>
                                      <p className="time">
                                        26 March 2017 by <a href="www.google.com"> johnnylee</a>
                                      </p>
                                    </div>
                                  </div>
                                  <p>The Avengers raid a Hydra base in Sokovia commanded by Strucker and they retrieve Loki's scepter. They also discover that Strucker had been conducting experiments with the orphan twins Pietro Maximoff (Aaron Taylor-Johnson), who has super speed, and Wanda Maximoff (Elizabeth Olsen), who can control minds and project energy. Tony Stark (Robert Downey Jr.) discovers an Artificial Intelligence in the scepter and convinces Bruce Banner (Mark Ruffalo) to secretly help him to transfer the A.I. to his Ultron defense system. However, the Ultron understands that is necessary to annihilate mankind to save the planet, attacks the Avengers and flees to Sokovia with the scepter. He builds an armature for self-protection and robots for his army and teams up with the twins. The Avengers go to Clinton Barton's house to recover, but out of the blue, Nick Fury (Samuel L. Jackson) arrives and convinces them to fight against Ultron. Will they succeed? </p>
      
                                  <p>"Avengers: Age of Ultron" is an entertaining adventure with impressive special effects and cast. The storyline might be better, since most of the characters do not show any chemistry. However, it is worthwhile watching this film since the amazing special effects are not possible to be described in words. Why Pietro has to die is also not possible to be explained. My vote is eight.</p>
                                </div>
                                <div className="topbar-filter">
                                  <label>Reviews per page:</label>
                                  <select>
                                    <option value="range">5 Reviews</option>
                                    <option value="saab">10 Reviews</option>
                                  </select>
                                  <div className="pagination2">
                                    <span>Page 1 of 6:</span>
                                    <a className="active" href="www.google.com">1</a>
                                    <a href="www.google.com">2</a>
                                    <a href="www.google.com">3</a>
                                    <a href="www.google.com">4</a>
                                    <a href="www.google.com">5</a>
                                    <a href="www.google.com">6</a>
                                    <a href="www.google.com"><i className="ion-arrow-right-b"></i></a>
                                  </div>
                                </div>
                                    </div>
                                </div>
                                <div id="cast" className="tab">
                                  <div className="row">
                                      <h3>Cast & Crew of</h3>
                                    <h2>Avengers: Age of Ultron</h2>
                                    <div className="title-hd-sm">
                                  <h4>Directors & Credit Writers</h4>
                                </div>
                                <div className="mvcast-item">											
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>JW</h4>
                                      <a href="www.google.com">Joss Whedon</a>
                                    </div>
                                    <p>...  Director</p>
                                  </div>
                                </div>
                                <div className="title-hd-sm">
                                  <h4>Directors & Credit Writers</h4>
                                </div>
                                <div className="mvcast-item">											
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>SL</h4>
                                      <a href="www.google.com">Stan Lee</a>
                                    </div>
                                    <p>...  (based on Marvel comics)</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>JK</h4>
                                      <a href="www.google.com">Jack Kirby</a>
                                    </div>
                                    <p>...  (based on Marvel comics)</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>JS</h4>
                                      <a href="www.google.com">Joe Simon</a>
                                    </div>
                                    <p>...  (character created by: Captain America)</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>JS</h4>
                                      <a href="www.google.com">Joe Simon</a>
                                    </div>
                                    <p>...  (character created by: Thanos)</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>RT</h4>
                                      <a href="www.google.com">Roy Thomas</a>
                                    </div>
                                    <p>...  (character created by: Ultron, Vision)</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>JB</h4>
                                      <a href="www.google.com">John Buscema</a>
                                    </div>
                                    <p>...  (character created by: Ultron, Vision)</p>
                                  </div>
                                </div>
                                <div className="title-hd-sm">
                                  <h4>Cast</h4>
                                </div>
                                <div className="mvcast-item">											
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <img src={require("../images/uploads/cast1.jpg")} alt=""/>
                                      <a href="www.google.com">Robert Downey Jr.</a>
                                    </div>
                                    <p>...  Robert Downey Jr.</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <img src={require("../images/uploads/cast2.jpg")} alt=""/>
                                      <a href="www.google.com">Chris Hemsworth</a>
                                    </div>
                                    <p>...  Thor</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <img src={require("../images/uploads/cast3.jpg")} alt=""/>
                                      <a href="www.google.com">Mark Ruffalo</a>
                                    </div>
                                    <p>...  Bruce Banner/ Hulk</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <img src={require("../images/uploads/cast4.jpg")} alt=""/>
                                      <a href="www.google.com">Chris Evans</a>
                                    </div>
                                    <p>...  Steve Rogers/ Captain America</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <img src={require("../images/uploads/cast5.jpg")} alt=""/>
                                      <a href="www.google.com">Scarlett Johansson</a>
                                    </div>
                                    <p>...  Natasha Romanoff/ Black Widow</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <img src={require("../images/uploads/cast6.jpg")} alt=""/>
                                      <a href="www.google.com">Jeremy Renner</a>
                                    </div>
                                    <p>...  Clint Barton/ Hawkeye</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <img src={require("../images/uploads/cast7.jpg")} alt=""/>
                                      <a href="www.google.com">James Spader</a>
                                    </div>
                                    <p>...  Ultron</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <img src={require("../images/uploads/cast9.jpg")} alt=""/>
                                      <a href="www.google.com">Don Cheadle</a>
                                    </div>
                                    <p>...  James Rhodes/ War Machine</p>
                                  </div>
                                </div>
                                <div className="title-hd-sm">
                                  <h4>Produced by</h4>
                                </div>
                                <div className="mvcast-item">											
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>VA</h4>
                                      <a href="www.google.com">Victoria Alonso</a>
                                    </div>
                                    <p>...  executive producer</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>MB</h4>
                                      <a href="www.google.com">Mitchel Bell</a>
                                    </div>
                                    <p>...  co-producer (as Mitch Bell)</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>JC</h4>
                                      <a href="www.google.com">Jamie Christopher</a>
                                    </div>
                                    <p>...  associate producer</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>LD</h4>
                                      <a href="www.google.com">Louis D’Esposito</a>
                                    </div>
                                    <p>...  executive producer</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>JF</h4>
                                      <a href="www.google.com">Jon Favreau</a>
                                    </div>
                                    <p>...  executive producer</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>KF</h4>
                                      <a href="www.google.com">Kevin Feige</a>
                                    </div>
                                    <p>...  producer</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>AF</h4>
                                      <a href="www.google.com">Alan Fine</a>
                                    </div>
                                    <p>...  executive producer</p>
                                  </div>
                                  <div className="cast-it">
                                    <div className="cast-left">
                                      <h4>JF</h4>
                                      <a href="www.google.com">Jeffrey Ford</a>
                                    </div>
                                    <p>...  associate producer</p>
                                  </div>
                                </div>
                                    </div>
                                </div>
                                <div id="media" className="tab">
                                  <div className="row">
                                    <div className="rv-hd">
                                        <div>
                                          <h3>Videos & Photos of</h3>
                                        <h2>Skyfall: Quantum of Spectre</h2>
                                        </div>
                                      </div>
                                      <div className="title-hd-sm">
                                  <h4>Videos <span>(8)</span></h4>
                                </div>
                                <div className="mvsingle-item media-item">
                                  <div className="vd-item">
                                    <div className="vd-it">
                                      <img className="vd-img" src={require("../images/uploads/vd-item1.jpg")} alt=""/>
                                      <a className="fancybox-media hvr-grow"  href="https://www.youtube.com/embed/o-0hcF97wy0"><img src={require("../images/uploads/play-vd.png")} alt=""/></a>
                                    </div>
                                    <div className="vd-infor">
                                      <h6> <a href="www.google.com">Trailer:  Watch New Scenes</a></h6>
                                      <p className="time"> 1: 31</p>
                                    </div>
                                  </div>
                                  <div className="vd-item">
                                    <div className="vd-it">
                                      <img className="vd-img" src={require("../images/uploads/vd-item2.jpg")} alt=""/>
                                      <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src={require("../images/uploads/play-vd.png")} alt=""/></a>
                                    </div>
                                    <div className="vd-infor">
                                      <h6> <a href="www.google.com">Featurette: “Avengers Re-Assembled</a></h6>
                                      <p className="time"> 1: 03</p>
                                    </div>
                                  </div>
                                  <div className="vd-item">
                                    <div className="vd-it">
                                      <img className="vd-img" src={require("../images/uploads/vd-item3.jpg")} alt=""/>
                                      <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src={require("../images/uploads/play-vd.png")} alt=""/></a>
                                    </div>
                                    <div className="vd-infor">
                                      <h6> <a href="www.google.com">Interview: Robert Downey Jr</a></h6>
                                      <p className="time"> 3:27</p>
                                    </div>
                                  </div>
                                  <div className="vd-item">
                                    <div className="vd-it">
                                      <img className="vd-img" src={require("../images/uploads/vd-item4.jpg")} alt=""/>
                                      <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src={require("../images/uploads/play-vd.png")} alt=""/></a>
                                    </div>
                                    <div className="vd-infor">
                                      <h6> <a href="www.google.com">Interview: Scarlett Johansson</a></h6>
                                      <p className="time"> 3:27</p>
                                    </div>
                                  </div>
                                  <div className="vd-item">
                                    <div className="vd-it">
                                      <img className="vd-img" src={require("../images/uploads/vd-item1.jpg")} alt=""/>
                                      <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src={require("../images/uploads/play-vd.png")} alt=""/></a>
                                    </div>
                                    <div className="vd-infor">
                                      <h6> <a href="www.google.com">Featurette: Meet Quicksilver & The Scarlet Witch</a></h6>
                                      <p className="time"> 1: 31</p>
                                    </div>
                                  </div>
                                  <div className="vd-item">
                                    <div className="vd-it">
                                      <img className="vd-img" src={require("../images/uploads/vd-item2.jpg")} alt=""/>
                                      <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src={require("../images/uploads/play-vd.png")} alt=""/></a>
                                    </div>
                                    <div className="vd-infor">
                                      <h6> <a href="www.google.com">Interview: Director Joss Whedon</a></h6>
                                      <p className="time"> 1: 03</p>
                                    </div>
                                  </div>
                                  <div className="vd-item">
                                    <div className="vd-it">
                                      <img className="vd-img" src={require("../images/uploads/vd-item3.jpg")} alt=""/>
                                      <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src={require("../images/uploads/play-vd.png")} alt=""/></a>
                                    </div>
                                    <div className="vd-infor">
                                      <h6> <a href="www.google.com">Interview: Mark Ruffalo</a></h6>
                                      <p className="time"> 3:27</p>
                                    </div>
                                  </div>
                                  <div className="vd-item">
                                    <div className="vd-it">
                                      <img className="vd-img" src={require("../images/uploads/vd-item4.jpg")} alt=""/>
                                      <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src={require("../images/uploads/play-vd.png")} alt=""/></a>
                                    </div>
                                    <div className="vd-infor">
                                      <h6> <a href="www.google.com">Official Trailer #2</a></h6>
                                      <p className="time"> 3:27</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="title-hd-sm">
                                  <h4>Photos <span> (21)</span></h4>
                                </div>
                                <div className="mvsingle-item">
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image11.jpg" ><img src={require("../images/uploads/image1.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery"  href="images/uploads/image21.jpg" ><img src={require("../images/uploads/image2.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image31.jpg" ><img src={require("../images/uploads/image3.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image41.jpg" ><img src={require("../images/uploads/image4.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image51.jpg" ><img src={require("../images/uploads/image5.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image61.jpg" ><img src={require("../images/uploads/image6.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image71.jpg" ><img src={require("../images/uploads/image7.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image81.jpg" ><img src={require("../images/uploads/image8.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image91.jpg" ><img src={require("../images/uploads/image9.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image101.jpg" ><img src={require("../images/uploads/image10.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image111.jpg" ><img src={require("../images/uploads/image1-1.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image121.jpg" ><img src={require("../images/uploads/image12.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image131.jpg" ><img src={require("../images/uploads/image13.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image141.jpg" ><img src={require("../images/uploads/image14.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image151.jpg" ><img src={require("../images/uploads/image15.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image161.jpg" ><img src={require("../images/uploads/image16.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image171.jpg" ><img src={require("../images/uploads/image17.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image181.jpg" ><img src={require("../images/uploads/image18.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image191.jpg" ><img src={require("../images/uploads/image19.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image201.jpg" ><img src={require("../images/uploads/image20.jpg")} alt=""/></a>
                                  <a className="img-lightbox"  data-fancybox-group="gallery" href="images/uploads/image211.jpg" ><img src={require("../images/uploads/image2-1.jpg")} alt=""/></a>
                                </div>
                                  </div>
                                </div>
                                <div id="moviesrelated" className="tab">
                                  <div className="row">
                                    <h3>Related Movies To</h3>
                                    <h2>Skyfall: Quantum of Spectre</h2>
                                    <div className="topbar-filter">
                                  <p>Found <span>12 movies</span> in total</p>
                                  <label>Sort by:</label>
                                  <select>
                                    <option value="popularity">Popularity Descending</option>
                                    <option value="popularity">Popularity Ascending</option>
                                    <option value="rating">Rating Descending</option>
                                    <option value="rating">Rating Ascending</option>
                                    <option value="date">Release date Descending</option>
                                    <option value="date">Release date Ascending</option>
                                  </select>
                                </div>
                                <div className="movie-item-style-2">
                                  <img src={require("../images/uploads/mv1.jpg")} alt=""/>
                                  <div className="mv-item-infor">
                                    <h6><a href="www.google.com">oblivion <span>(2012)</span></a></h6>
                                    <p className="rate"><i className="ion-android-star"></i><span>8.1</span> /10</p>
                                    <p className="describe">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
                                    <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                    <p>Director: <a href="www.google.com">Joss Whedon</a></p>
                                    <p>Stars: <a href="www.google.com">Robert Downey Jr.,</a> <a href="www.google.com">Chris Evans,</a> <a href="www.google.com">  Chris Hemsworth</a></p>
                                  </div>
                                </div>
                                <div className="movie-item-style-2">
                                  <img src={require("../images/uploads/mv2.jpg")} alt=""/>
                                  <div className="mv-item-infor">
                                    <h6><a href="www.google.com">into the wild <span>(2014)</span></a></h6>
                                    <p className="rate"><i className="ion-android-star"></i><span>7.8</span> /10</p>
                                    <p className="describe">As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...</p>
                                    <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                    <p>Director: <a href="www.google.com">Anthony Russo,</a><a href="www.google.com">Joe Russo</a></p>
                                    <p>Stars: <a href="www.google.com">Chris Evans,</a> <a href="www.google.com">Samuel L. Jackson,</a> <a href="www.google.com">  Scarlett Johansson</a></p>
                                  </div>
                                </div>
                                <div className="movie-item-style-2">
                                  <img src={require("../images/uploads/mv3.jpg")} alt=""/>
                                  <div className="mv-item-infor">
                                    <h6><a href="www.google.com">blade runner  <span>(2015)</span></a></h6>
                                    <p className="rate"><i className="ion-android-star"></i><span>7.3</span> /10</p>
                                    <p className="describe">Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...</p>
                                    <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                    <p>Director: <a href="www.google.com">Peyton Reed</a></p>
                                    <p>Stars: <a href="www.google.com">Paul Rudd,</a> <a href="www.google.com"> Michael Douglas</a></p>
                                  </div>
                                </div>
                                <div className="movie-item-style-2">
                                  <img src={require("../images/uploads/mv4.jpg")} alt=""/>
                                  <div className="mv-item-infor">
                                    <h6><a href="www.google.com">Mulholland pride<span> (2013)  </span></a></h6>
                                    <p className="rate"><i className="ion-android-star"></i><span>7.2</span> /10</p>
                                    <p className="describe">When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
                                    <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                    <p>Director: <a href="www.google.com">Shane Black</a></p>
                                    <p>Stars: <a href="www.google.com">Robert Downey Jr., </a> <a href="www.google.com">  Guy Pearce,</a><a href="www.google.com">Don Cheadle</a></p>
                                  </div>
                                </div>
                                <div className="movie-item-style-2">
                                  <img src={require("../images/uploads/mv5.jpg")} alt=""/>
                                  <div className="mv-item-infor">
                                    <h6><a href="www.google.com">skyfall: evil of boss<span> (2013)  </span></a></h6>
                                    <p className="rate"><i className="ion-android-star"></i><span>7.0</span> /10</p>
                                    <p className="describe">When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
                                    <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                    <p>Director: <a href="www.google.com">Alan Taylor</a></p>
                                    <p>Stars: <a href="www.google.com">Chris Hemsworth,  </a> <a href="www.google.com">  Natalie Portman,</a><a href="www.google.com">Tom Hiddleston</a></p>
                                  </div>
                                </div>
                                <div className="topbar-filter">
                                  <label>Movies per page:</label>
                                  <select>
                                    <option value="range">5 Movies</option>
                                    <option value="saab">10 Movies</option>
                                  </select>
                                  <div className="pagination2">
                                    <span>Page 1 of 2:</span>
                                    <a className="active" href="www.google.com">1</a>
                                    <a href="www.google.com">2</a>
                                    <a href="www.google.com"><i className="ion-arrow-right-b"></i></a>
                                  </div>
                                </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>)
        }

      })()
  )
}

export default SingleMovie
