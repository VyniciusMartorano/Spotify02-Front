import axios from "axios"
import { getToken } from "../utils/localStorage/auth"
import resetLocalStorage from "../utils/localStorage/resetLocalStorage"
import { refreshToken } from "./auth"


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
      (response) => response,
      async (error) => {
        if (error.response.status === 401 && getToken()) {
          await refreshToken(error)
          //alterado pra reject
          return Promise.reject() 
        }
        else if ((error.response.status === 403 && getToken())) {
          //mandar pro login
          resetLocalStorage()
          return Promise.error.reject()
        }
      }
    )
  }
}

export default api