import { useDispatch, useSelector } from 'react-redux';
// import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import SingleMovie from './pages/SingleMovie';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import  Header from './components/Header';
import Footer from './components/Footer'
import { useEffect } from 'react';

function App() {

  const state = useSelector(state=>state.selectGlobalState)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  function stateChecker(state){
    const currestTimeStampDate = Date.now();
    const difference = currestTimeStampDate - state.lastDate

    if(state.name === ''){
      console.log('Emptystate')
      if(location.pathname !== '/login'){
        console.log('Redirigiendo')
        navigate('/login')
      }
      return
    }
    
    if(difference > 43200){
      console.log('Diferencia',difference)
      dispatch({
        type: 'restartState'
      })
      navigate('/login')
      return
    }

  }

  useEffect(()=>{
    stateChecker(state)
  },[location])

  return (
    <>
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
    </>
  );
}

export default App;
