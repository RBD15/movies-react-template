import React, { useEffect, useState } from 'react'
import MovieSlider from '../components/MovieSlider'
import Movies from '../components/Movies'
import LatestNew from '../components/LatestNew'
import Trailers from '../components/Trailers'
import { getLastestMovies, getLastestSeries, getMovies } from '../hooks/useMovies'
import Preloader from '../components/Preloader'

const Main = () => {

  const [movies,setMovie] = useState([])
  const [latestMovies,setLatestMovie] = useState([])
  const [latestSeries,setLatestSerie] = useState([])


  const getAllMovies = async () => {
    const moviesFounded = await getMovies();
    setMovie(moviesFounded.data.Search);
  }

  const getRecientMovies = async () => {
    const moviesFounded = await getLastestMovies();
    setLatestMovie(moviesFounded.data.Search);
  }

  const getRecientSeries = async () => {
    const seriesFounded = await getLastestSeries();
    setLatestSerie(seriesFounded.data.Search);
  }

  useEffect(()=> {
    getAllMovies()
    getRecientMovies()
    getRecientSeries()
  },[]);

  return (
      (() => {
        if(movies.length === 0){
          return (<Preloader></Preloader>)
        }else{
          return (<>
            <MovieSlider movies={movies}></MovieSlider>
            {/* <Movies></Movies> */}
            <LatestNew latestContent={latestMovies} title='Movies'></LatestNew>
            <LatestNew latestContent={latestSeries} title='Series'></LatestNew>
            <Trailers></Trailers> 
          </>)
        }
      })()
  )
}

export default Main
