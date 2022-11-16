import axios from "axios"
import Api from "./api.ts"




class MusicRegistrationService {
    
    constructor() {
        this.api = new Api()
    }
    
    
    getDefaultPlaylists() {
        return axios.post(`${this.api.API_core}api/playlist/retrieve_playlists/`, {isDefault: 1})
    }

    getPlaylistsByUser(user_id) {
        return axios.post(`${this.api.API_core}api/playlist/retrieve_playlists/`, {user_id})

    }
    
}


export default MusicRegistrationService