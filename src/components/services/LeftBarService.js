import axios from "axios"
import Api from "./api"




class LeftBarService {
    
    constructor() {
        this.api = new Api()
    }

    
    getPlaylists() {
        return this.api.axios.get(`api/playlist/`)

    }
    
}


export default LeftBarService