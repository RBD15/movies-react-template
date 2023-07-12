import React, { Fragment, useEffect, useMemo, useState } from 'react'

import MovieSlider from '../components/MovieSlider'
import Movies from '../components/Movies'
import LatestNew from '../components/LatestNew'
import Trailers from '../components/Trailers'
import { getMovies } from '../hooks/useMovies'
import Preloader from '../components/Preloader'

const Main = () => {

  const [movies,setMovie] = useState([])
  const getAllMovies = async () => {
    const moviesFounded = await getMovies();
    setMovie(moviesFounded.data.Search);
  }
  useEffect(()=> {
    getAllMovies()
  },[]);

  return (
      (() => {
        if(movies.length === 0){
          return (<Preloader></Preloader>)
        }else{
          return (<Fragment>
            <MovieSlider movies={movies}></MovieSlider>
            <Movies></Movies>
            <LatestNew></LatestNew>
            <Trailers></Trailers>
          </Fragment>)
        }
      })()
  )
}

export default Main
