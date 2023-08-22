const initialState = {
  name: '',
  phone: '',
  address: '',
  email: '',
  client: {
    store: {
      favorite: {
        movies: [
        ],
        series: []
      }
    }
  },
  lastDate: ''
}

export const selectGlobalState = (state) => state

export const reducer = (state =initialState, { type, payload }) => {
  const maxDuration = 36000;
  const currentTime = Date.now()
  console.log('Payload',payload)
  console.log('State',state)
  switch (type) {
    case 'initUserData':
      console.log('GlobalState',payload);
      const newState = {
        name: payload.name,
        phone: '',
        address: payload.address,
        email: payload.email,
        client: {
          store: {
            favorite: payload.client.store.favorite            
          }
        },
        lastDate: currentTime
      }
      console.log('data',newState) 

      return {...newState}

    case 'addFavorite':
      return { ...state,client: { store: { favorite:{...state.client.store.favorite, movies:[...state.client.store.favorite.movies,payload]} } }}

    case 'removeFavorite':
      return { ...state, client: { store: { favorite:
        {
          ...state.client.store.favorite,
          movies:
            state.client.store.favorite.movies.filter((movie) => {
              if(movie.imdbID !== payload)
                return movie 
            })
        } } } 
      }
      
    
    default:
      return state
  }
}
