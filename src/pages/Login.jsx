import React, { useRef } from 'react'
import Logup from '../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../css/login.css'
import OwnBackendLogin from '../utils/Auth/OwnBackendLogin'
import FirebaseLogin from '../utils/Auth/FirebaseLogin'

const Login = () => {

  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const loginAdapter = new OwnBackendLogin('http://localhost:3001/')
  const loginAdapter = new FirebaseLogin('')

  const submit = async(e) => {
    e.preventDefault()

    loginAdapter.logging(email.current.value,password.current.value).then((result)=>{
      dispatch({
        type: 'initUserData',
        payload: result
      })
      navigate("/", { relative: "path" })
    }).catch((err)=> {
      console.log(err)
      alert(err)
    })

  }

  return (
    
      <div className='row login-section'>
        <div className="col-8 mx-auto">
          <div className="login-form">
          <form onSubmit={submit}>
            <h1>Iniciar Sesión</h1>
            <input type="text" placeholder="Correo" ref={email} required="required"/>
            <input type="password" placeholder="Contraseña" ref={password} required="required"/>
            <button className='btn signupLink' type="submit">Iniciar Sesión</button>
            
            {/* <div className="social-login">
              <button >Login con Facebook</button>
            </div>
            */}
            <div className="signup-link">
                ¿No tienes una cuenta? <button className='btn'><a href="#">Regístrate aquí</a></button>
            </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login
