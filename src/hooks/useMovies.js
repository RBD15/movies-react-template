import { connect } from "../utils/HttpRequest"

export const getMovies = async () => {
  const url = `${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=batman&page=1&type=movie`;
  const response = await connect(url,'GET');
  return response
}

export const getMovie = async (imdbId) => {
  const url = `${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbId}`;
  const response = await connect(url,'GET');
  return response
}
