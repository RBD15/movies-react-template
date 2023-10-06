import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const state = useSelector((state)=>state.selectGlobalState)
  return (
    <header className="ht-header">
      <div className="headerContainer">
        <nav className="navbar navbar-default navbar-custom">
            <div className="navbar-header logo">
                <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  {/* <div id="nav-icon1">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div> */}
                </div>
                <Link to={'/'}><img className="logo" src={require("../images/logo1.png")} alt="" width="119" height="58"/></Link>
            </div>
            <div >
            <ul className="nav navbar-nav flex-child-menu menu-right">         
              {/* <li><a href="#">Help</a></li>
              <li className="loginLink"><a href="#">LOG In</a></li> */}
              <li className="btn signupLink"><a href="#">sign up</a></li>
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
