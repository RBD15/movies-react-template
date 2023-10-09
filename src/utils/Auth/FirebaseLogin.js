import LoginAdapter from "../LoginAdapter";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { LoginResponseVO } from "./LoginResponseVO";

class FirebaseLogin extends LoginAdapter{

  #result;
  #url;
  #app;
  #auth;
  constructor(url) {
    super()
    this.#url = url
    try {      
      this.init()
    } catch (error) {
      throw new Error('Firebase initialization error')
    }
  }

  init() {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID
    };
    
    this.#app = initializeApp(firebaseConfig);
    this.#auth = getAuth(this.#app);
  }

  async logging(email, password) {
    return await signInWithEmailAndPassword(this.#auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const logingResponse = new LoginResponseVO('Prueba','','',user.email,{
        store: {
          favorite: {
            movies: [],
            series: []
          }            
        }
      });

      return logingResponse.getResponse()
    })  
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error', error)
      throw new Error(errorMessage)
    });
  }

}

export default FirebaseLogin
