import axios from "axios"
import { getToken } from "./auth"



class api {

  constructor() {
    
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_CORE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${getToken()}` 
      },
    })
    //definir interceptor para refresh token
  }
}

export default api