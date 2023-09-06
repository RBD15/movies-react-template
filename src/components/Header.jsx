import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const state = useSelector((state)=>state.selectGlobalState)
  return (
    <header className="ht-header">
      <div className="container">
        <nav className="navbar navbar-default navbar-custom">
            <div className="navbar-header logo">
                <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <div id="nav-icon1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                </div>
                <Link to={'/'}><img className="logo" src={require("../images/logo1.png")} alt="" width="119" height="58"/></Link>
              </div>
            <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav flex-child-menu menu-left">
                <li className="hidden">
                  <a href="#page-top"></a>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
                  Home <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown-menu level1">
                    <li><a href="index-2.html">Home 01</a></li>
                    <li><a href="homev2.html">Home 02</a></li>
                    <li><a href="homev3.html">Home 03</a></li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  movies<i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown-menu level1">
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Movie grid<i className="ion-ios-arrow-forward"></i></a>
                      <ul className="dropdown-menu level2">
                        <li><a href="moviegrid.html">Movie grid</a></li>
                        <li><a href="moviegridfw.html">movie grid full width</a></li>
                      </ul>
                    </li>			
                    <li><a href="movielist.html">Movie list</a></li>
                    <li><a href="moviesingle.html">Movie single</a></li>
                    <li className="it-last"><a href="seriessingle.html">Series single</a></li>
                  </ul>
                </li>
                <li className="dropdown first">
                  <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  celebrities <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </a>
                  <ul className="dropdown-menu level1">
                    <li><a href="celebritygrid01.html">celebrity grid 01</a></li>
                    <li><a href="celebritygrid02.html">celebrity grid 02 </a></li>
                    <li><a href="celebritylist.html">celebrity list</a></li>
                    <li className="it-last"><a href="celebritysingle.html">celebrity single</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav flex-child-menu menu-right">          
                <li className="loginLink" style={{display:(state.email)? 'none':''}} ><Link href="#" to={'/login'}>LOG In</Link></li>
                <li className="btn signupLink" style={{display:(state.email)? 'none':''}}><Link href="#" to={'/register'}>sign up</Link></li>
              </ul>
            </div>
          </nav>
          
          <div className="top-search">
            <select>
            <option value="united">TV show</option>
            <option value="saab">Others</option>
          </select>
          <input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for"/>
          </div>
      </div>
    </header>
  )
}

export default Header
