import axios from "axios"

const Logup = async(email,password) => {
  const url = 'http://localhost:3001/'

  const data = {
    email,
    password
  }
  const result = await axios.post(url,{...data})
  return result
}

export default Logup
