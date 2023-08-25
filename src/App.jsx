import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import SingleMovie from './pages/SingleMovie';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import  Header from './components/Header';
import Footer from './components/Footer'

function App() {

  const state = useSelector(state=>state.selectGlobalState)
  const dispatch = useDispatch()
  console.log('First Render', state)

  function stateChecker(state){
    const currestTimeStampDate = Date.now();
    const difference = currestTimeStampDate - state.lastDate
    console.log('Diferencia',difference)
    if(difference > 43200)
      dispatch({
        type: 'restartState'
      })
  }
  stateChecker(state)

  return (
    <div>
        {/* <Header></Header>
        <Main></Main>
        <SingleMovie></SingleMovie>
        <Footer></Footer> */}
      {/* <Provider store={store}> */}
        {/* <Router> */}
          <Header></Header>
          <Routes>
            <Route path='/' element={<Main/>}> 
            </Route>
            <Route path='/movie/:imdbId' element={<SingleMovie/>}>
            </Route>
            <Route  path='/login' element={<Login/>}>
            </Route>
            <Route exact path='/register' element={<Register/>}>
            </Route>
            <Route path='/*' element={<NotFound/>}>
            </Route>
          </Routes>
          <Footer></Footer>
        {/* </Router> */}
      {/* </Provider> */}
    </div>
  );
}

export default App;
