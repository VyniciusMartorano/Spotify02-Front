import axios, { Axios } from "axios"



class Api {

    API_core: string
    token: string = ''

    axios: Axios
    constructor() {
        this.API_core = `http://127.0.0.1:10000/`
        // this.axios = new Axios({headers: {'Authorization': `Bearer ${this.token}`}})
        this.axios = new Axios()
    }


    // async getToken() {
    //     const response = await axios.get(`${this.API_core}token/`)
    //     return response

    // }

}

export default Api