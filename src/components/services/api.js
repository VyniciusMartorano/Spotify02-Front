import axios from "axios"
import { getToken, refreshToken } from "./auth"



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
    
    this.axios.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        if (error.response.status === 401 && getToken()) {
          const response = await refreshToken(error)
          return response
        }
        else if ((error.response.status === 403 && getToken())) {
          //mandar pro login
          return Promise.error.reject()
        }
      }
     )
  }
}

export default api