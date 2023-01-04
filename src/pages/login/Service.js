import api from "../../components/services/api"



class LoginService {
    constructor() {
        this.api = new api()
    }
    
    
    Logar({ username, password }) {
        return this.api.axios.post(`token/`, {username, password})
    }
    
}


export default LoginService