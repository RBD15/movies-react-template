import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div class="page-single-2">
      <div class="container">
        <div class="row">
          <div class="middle-content">
            <a href="index-2.html"><img class="md-logo" src="images/logo1.png" alt=""/></a>
            <img src="images/uploads/err-img.png" alt=""/>
            <h1>Page not found</h1>
            <Link to={'/'} class="redbtn">go home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
