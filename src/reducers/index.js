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
  lastDate: '',
  token: ''
}

export const selectGlobalState = (state) => state

export const reducer = (state =initialState, { type, payload }) => {
  const currentTime = Date.now()
  // console.log('Payload',payload)
  switch (type) {
    case 'restartState':
      const firstState = initialState
      firstState.lastDate = currentTime
      return {...firstState}
    case 'initUserData':
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

      return {...newState}
    case 'logout':
      const emptyState = {
        name: '',
        phone: '',
        address: '',
        email: '',
        client: {
          store: {
            favorite: {
              movies:[],
              series:[]
            }            
          }
        },
        token: '',
        lastDate: ''
      }
      return {...emptyState}
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
