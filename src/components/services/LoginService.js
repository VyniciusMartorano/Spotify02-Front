import api from "./api"



class LoginService {

    
    
    Logar({ user, password }) {
        return api.post(`user/`, {user, password})
    }
    
}


export default LoginService