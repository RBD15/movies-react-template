import { connect } from "../utils/HttpRequest"

export const getMovies = async () => {
  const url = `${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=batman&page=1&type=movie`;
  const response = await connect(url,'GET');
  return response
}

export const getLastestMovies = async () => {
  const currentYear = '2023';
  const url = `${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=batman&page=1&type=movie&y=${currentYear}`;
  const response = await connect(url,'GET');
  return response
}

export const getLastestSeries = async () => {
  const currentYear = '2023';
  const url = `${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=batman&page=1&type=series&y=${currentYear}`;
  const response = await connect(url,'GET');
  return response
}

export const getMovie = async (imdbId) => {
  const url = `${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbId}`;
  const response = await connect(url,'GET');
  return response
}
