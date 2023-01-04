import Api from "./../services/api"




class Service {
    
    constructor() {
        this.api = new Api()
    }

    async getUser() {
        return await this.api.axios.get(`api/user/`)
    }

    async search(filter, optionSearch) {
        return await this.api.axios.post(`api/search/`, {filter, optionSearch})
    }

    
}


export default Service