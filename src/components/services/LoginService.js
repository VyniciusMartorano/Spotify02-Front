import api from "./api"



class LoginService {
    constructor() {
        this.api = new api()
    }
    
    
    Logar({ user, password }) {
        return this.api.axios.post(`user/`, {user, password})
    }
    
}


export default LoginService