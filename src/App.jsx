import './App.css';
import Main from './pages/Main';
import SingleMovie from './pages/SingleMovie';
import Header from './components/Header';
import Footer from './components/Footer';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment className="App">
      <Header></Header>
      {/* <Main></Main> */}
      <SingleMovie></SingleMovie>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
