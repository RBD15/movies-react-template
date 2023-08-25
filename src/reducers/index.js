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
  console.log('Payload',payload)
  switch (type) {
    case 'restartState':
      const firstState = initialState
      firstState.lastDate = currentTime
      console.log('InitState',firstState)  
      return {...firstState}
    case 'initUserData':
      const newState = {
        name: payload.users[1].name,
        phone: '',
        address: payload.users[1].address,
        email: payload.users[1].email,
        client: {
          store: {
            favorite: payload.users[1].client.store.favorite            
          }
        },
        // token: payload.newToken,
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
