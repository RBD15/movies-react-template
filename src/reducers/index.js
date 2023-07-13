const initialState = {
  name: 'Prueba',
  phone: '123456789',
  address: 'Something Place',
  email: 'prueba@correo.com',
  favorite: {
    movies: [
      {
        Title:"Batman Begins",
        Year:"2005",Rated:"PG-13",
        Released:"15 Jun 2005",
        Runtime:"140 min",
        Genre:"Action, Crime, Drama",
        Director:"Christopher Nolan",
        Writer:"Bob Kane, David S. Goyer, Christopher Nolan",
        Actors:"Christian Bale, Michael Caine, Ken Watanabe",
        Plot:"After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.",
        Language:"English, Mandarin",
        Country:"United States, United Kingdom",
        Awards:"Nominated for 1 Oscar. 14 wins & 79 nominations total",
        Poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        Ratings:[
          {Source:"Internet Movie Database",
          Value:"8.2/10"
        },
        {
          Source:"Rotten Tomatoes",
          Value:"84%"
        },
        {
          Source:"Metacritic",
          Value:"70/100"
        }
      ],
      Metascore:"70",
      imdbRating:"8.2",
      imdbVotes:"1,507,891",
      imdbID:"tt0372784",
      Type:"movie",
      DVD:"18 Oct 2005",
      BoxOffice:"$206,863,479",
      Production:"N/A",
      Website:"N/A",
      Response:"True"
    }
    ],
    series: [

    ]
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'addFavorite':
    return { ...state,favorite:{...state.favorite, movies:[...state.favorite.movies,payload]}}

  default:
    return state
  }
}
