import React from 'react'

const Preloader = () => {
  return (
    <div id="preloader">
    <img className="logo" src={require("../images/logo1.png")} alt="" width="119" height="58"/>
      <div id="status">
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Preloader
