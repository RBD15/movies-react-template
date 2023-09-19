import React, { useEffect, useState } from 'react'
import MovieSlider from '../components/MovieSlider'
import Movies from '../components/Movies'
import LatestNew from '../components/LatestNew'
import Trailers from '../components/Trailers'
import { getMovies } from '../hooks/useMovies'
import Preloader from '../components/Preloader'
import { useSelector } from 'react-redux'

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
          return (<div>
             <MovieSlider movies={movies}></MovieSlider>
            <Movies></Movies>
             <LatestNew></LatestNew>
            <Trailers></Trailers> 
          </div>)
        }
      })()
  )
}

export default Main
