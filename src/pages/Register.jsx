import React from 'react'

const Register = () => {
  return (
    <div className="login-wrapper"  id="signup-content">
      <div className="login-content">
          <a href="#" className="close">x</a>
          <h3>sign up</h3>
          <form method="post" action="#">
              <div className="row">
                  <label for="username-2">
                      Username:
                      <input type="text" name="username" id="username-2" placeholder="Hugh Jackman" pattern="" required="required" />
                  </label>
              </div>
            
              <div className="row">
                  <label for="email-2">
                      your email:
                      <input type="password" name="email" id="email-2" placeholder="" pattern="" required="required" />
                  </label>
              </div>
              <div className="row">
                  <label for="password-2">
                      Password:
                      <input type="password" name="password" id="password-2" placeholder="" pattern="" required="required" />
                  </label>
              </div>
              <div className="row">
                  <label for="repassword-2">
                      re-type Password:
                      <input type="password" name="password" id="repassword-2" placeholder="" pattern="" required="required" />
                  </label>
              </div>
            <div className="row">
              <button type="submit">sign up</button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Register
