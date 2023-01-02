import Api from "./../services/api"




class Service {
    
    constructor() {
        this.api = new Api()
    }

    async getUser() {
        return await this.api.axios.get(`api/user/`)
    }

    async search(filter) {
        return await this.api.axios.post(`api/`)
    }

    
}


export default Service