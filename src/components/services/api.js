import axios from "axios"
// import { getToken } from "./auth"



const api = axios.create({
  baseURL: process.env.REACT_APP_API_CORE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

// Api.interceptors.request.use(async config => {
//   const token = getToken()
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })


export default api