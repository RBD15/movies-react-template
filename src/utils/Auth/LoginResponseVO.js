export class LoginResponseVO{

  #name;
  #phone;
  #address;
  #email;
  #client;
  constructor(name, phone, address, email, client){
    if(!name.length>0)
      throw new Error('invalid data')
    this.#name= name
    this.#phone= phone
    this.#address= address
    if(!email.length>0)
      throw new Error('invalid data')
    this.#email= email
    this.#client= client
  }

  getResponse(){
    const result = {
      name: this.#name,
      phone:this.#phone,
      address:this.#address,
      email:this.#email,
      client: this.#client,
    }
    return result
  
  }
}
