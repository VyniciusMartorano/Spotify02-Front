import axios from "axios"


class LoginService {

    apiUrl = `http://127.0.0.1:10000/`
    
    
    Logar({ user, password }) {
        return axios.post(`${this.apiUrl}api/user/`, {user, password})
    }
    
}


export default LoginService