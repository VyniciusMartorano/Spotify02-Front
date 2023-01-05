import api from "../../../services/api"



class LibraryService {
    constructor() {
        this.api = new api()
    }
    
    getUser() {
        return this.api.axios.get('api/user/')
    }

    getPlaylistsByGroups() {
        return this.api.axios.post(`api/playlist/retieve_playlist_from_library_by_user/`, {})
    }

}


export default LibraryService