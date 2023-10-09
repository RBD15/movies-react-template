import LoginAdapter from "../LoginAdapter";
import axios from "axios"
import { LoginResponseVO } from "./LoginResponseVO";

class OwnBackendLogin extends LoginAdapter{

  #result;
  #url;
  
  constructor(url) {
    super()
    this.#url = url
  }

  init() {

  }

  async logging(emailSubmited, password) {
    const data = {
      email:emailSubmited,
      password
    }
    this.#result = await axios.post(this.#url,{...data})
    console.log(this.#result.data)
    const {name, email, phone, store, address, client} = this.#result.data.users[1]
    const logingResponse = new LoginResponseVO(name,'',address,email,client)
    return logingResponse.getResponse()
  }

}

export default OwnBackendLogin
