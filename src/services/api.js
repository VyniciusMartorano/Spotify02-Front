import axios from "axios"
import { doLogout, getToken, refreshToken } from "./auth"

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
          const { data } = await refreshToken(error)
          setToken(data.access)
          
          //make request again with new token
          const originalRequest = error.config;
          originalRequest.headers["Authorization"] = `Bearer ${data.access}`;
          return this.axios(originalRequest)
        }
        else if ((error.response.status === 403 && getToken())) {
          //mandar pro login
          doLogout()
          return Promise.error.reject()
        }
      }
    )
  }
}

export default api