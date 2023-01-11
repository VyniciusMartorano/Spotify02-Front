import axios from "axios"


class LoginService {
    constructor() {
        this.baseUrl = process.env.REACT_APP_API_CORE_URL
    }
    
    Logar({ username, password }) {
        return axios.post(`${this.baseUrl}token/`, {username, password})
    }
    
}


export default LoginService