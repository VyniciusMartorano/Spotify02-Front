import axios from "axios"
import api from "../../services/api"

class LoginService {
    constructor() {
        this.baseUrl = process.env.REACT_APP_API_CORE_URL
    }
    
    Logar({ username, password }) {
        return axios.post(`${this.baseUrl}token/`, {username, password})
    }
    
    
    async getUser() {
        const apiManager = new api()
        return await apiManager.axios.get('api/user/')
    }
    
}


export default LoginService