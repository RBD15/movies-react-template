const initialState = {
  name: '',
  phone: '',
  address: '',
  email: '',
  favorite: {
    movies: [
    ],
    series: []
  }
}

export const reducer = (state =initialState, { type, payload }) => {
  switch (type) {
    case 'initUserData':
      const newState = {
        name: payload.name,
        phone: '',
        address: payload.address,
        email: payload.email,
        favorite: payload.client.store.favorite
      }
      console.log('data',newState) 

      return {...newState}

    case 'addFavorite':
      return { ...state,favorite:{...state.favorite, movies:[...state.favorite.movies,payload]}}

    case 'removeFavorite':
      return { ...state,favorite:
        {
          ...state.favorite,
          movies:
            state.favorite.movies.filter((movie)=>{
              if(movie.imdbID !== payload)
                return movie 
            })
        }
      }
    
    default:
      return state
  }
}
