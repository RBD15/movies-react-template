import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import SingleMovie from './pages/SingleMovie';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
        {/* <Header></Header>
        <Main></Main>
        <SingleMovie></SingleMovie>
        <Footer></Footer> */}
      {/* <Provider store={store}> */}
        {/* <Router> */}
          {/* <Header></Header> */}
          <Routes>
            <Route path='/' element={<Main/>}> 
            </Route>
            <Route path='/movie/:imdbId' element={<SingleMovie/>}>
            </Route>
            <Route  path='/login' element={<Login/>}>
            </Route>
            <Route exact path='/register' element={<Register/>}>
            </Route>
          </Routes>
          {/* <Footer></Footer> */}
        {/* </Router> */}
      {/* </Provider> */}
    </div>
  );
}

export default App;
