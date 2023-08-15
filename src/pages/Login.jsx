import React, { useRef } from 'react'
import Logup from '../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Login = () => {

  const email = useRef()
  const password = useRef()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const submit = async(e) => {
    e.preventDefault()
    console.log('Email', email.current.value)
    console.log('Password', password.current.value)
    Logup(email.current.value,password.current.value).then((result)=>{
      console.log('Data',result.data.users[1])
      dispatch({
        type: 'initUserData',
        payload: result.data.users[1]
      })
    }).catch((err)=> {
      console.log(err)
    })
    navigate("/", { relative: "path" })

  }

  return (
    <div className="login-wrapper" id="login-content">
      <div className="login-content">
          <a href="#" className="close">x</a>
          <h3>Login</h3>
          <form>
            <div className="row">
              <label for="username">
                      Username:
                      <input type="text" name="username" id="username" placeholder="Hugh Jackman" pattern="" ref={email} required="required" />
                  </label>
            </div>
            
              <div className="row">
                <label for="password">
                      Password:
                      <input type="password" name="password" id="password" placeholder="******" pattern=""  ref={password} required="required" />
                  </label>
              </div>
              <div className="row">
                <div className="remember">
            <div>
              <input type="checkbox" name="remember" value="Remember me" /><span>Remember me</span>
            </div>
                  <a href="#">Forget password ?</a>
                </div>
              </div>
            <div className="row"> 
              <button type="submit" onClick={submit} >Login</button>
              <Link to={'/'}>Main</Link>

            </div>
          </form>
          <div className="row">
            <p>Or via social</p>
              <div className="social-btn-2">
                <a className="fb" href="#"><i className="ion-social-facebook"></i>Facebook</a>
                <a className="tw" href="#"><i className="ion-social-twitter"></i>twitter</a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Login
