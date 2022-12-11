import api from "./api"




class LibraryService {
    constructor() {
        this.api = new api()
    }
    
    getUser() {
        return this.api.axios.get('api/user/')
    }

    getPlaylistsByGroups() {
        return this.api.axios.get(`api/playlist/retrieve_playlists_by_groups/`)
    }

}


export default LibraryService