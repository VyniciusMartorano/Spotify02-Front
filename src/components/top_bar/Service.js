import Api from "./../services/api"




class Service {
    
    constructor() {
        this.api = new Api()
    }

    async getUser() {
        return await this.api.axios.get(`api/user/`)
    }

    
}


export default Service