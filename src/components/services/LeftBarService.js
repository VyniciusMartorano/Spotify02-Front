import axios from "axios"
import Api from "./api"




class LeftBarService {
    
    constructor() {
        this.api = new Api()
    }

    
    getPlaylists() {
        return axios.get(`${this.api.API_core}api/playlist/`)

    }
    
}


export default LeftBarService