import axios from "axios"

export const connect = async (url,method) => {
  switch (method) {
    case 'GET':
      const response = await axios.get(url);
      return response;
    default:
      throw new Error('Request Method isnt valid');
  }
}
