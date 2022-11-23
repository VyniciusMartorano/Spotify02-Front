import axios from "axios"
import Api from "./api.ts"




class PlaylistsContentService {
    
    constructor() {
        this.api = new Api()
    }
    
    getPlaylistsByGroups() {
        return axios.get(`${this.api.API_core}api/playlist/retrieve_playlists_by_groups/`)
    }

    

    getPlaylistsByUser(user_id) {
        return axios.post(`${this.api.API_core}api/playlist/retrieve_playlists/`, {user_id})

    }
    
}


export default PlaylistsContentService