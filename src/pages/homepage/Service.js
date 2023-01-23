import api from "../../services/api"

class Service {
    constructor() {
        this.api = new api()
    }
    
    getUser() {
        return this.api.axios.get(`api/user/`)
    }
    
}


export default Service