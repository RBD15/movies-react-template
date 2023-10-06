import LoginAdapter from "../LoginAdapter";
import axios from "axios"

class OwnBackendLogin extends LoginAdapter{

  #result;
  #url;
  
  constructor(url) {
    super()
    this.#url = url
  }

  init() {

  }

  async logging(email, password) {
    const data = {
      email,
      password
    }
    this.#result = await axios.post(this.#url,{...data})
    return this.#result
  }

}

export default OwnBackendLogin
