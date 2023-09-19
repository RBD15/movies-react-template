import { useDispatch, useSelector } from 'react-redux';
// import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import SingleMovie from './pages/SingleMovie';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import  Header from './components/Header';
import Footer from './components/Footer'

function App() {

  const state = useSelector(state=>state.selectGlobalState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function stateChecker(state){
    const currestTimeStampDate = Date.now();
    const difference = currestTimeStampDate - state.lastDate
    if(difference > 43200){
      dispatch({
        type: 'restartState'
      })
      navigate('/login')
    }
  }
  stateChecker(state)

  return (
    <div>
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
    </div>
  );
}

export default App;
