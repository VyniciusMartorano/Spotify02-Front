import api from "./api"




class PlaylistsContentService {
    
    constructor() {
        this.api = new api()
    }


    
    getPlaylistsByGroups() {
        return this.api.axios.get(`api/playlist/retrieve_playlists_by_groups/`)
    }

    

    getPlaylistsByUser(user_id) {
        return this.api.axios.post(`api/playlist/retrieve_playlists/`, {user_id})

    }
    
}


export default PlaylistsContentService