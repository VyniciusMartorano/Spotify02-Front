import api from "./api"

class MusicRegistrationService {
    constructor() {
        this.api = new api()
    }
    
    
    DownloadUrlMusic(url) {
        return this.api.axios.post(`api/musics/download_music_by_url/`, {url})
    }
    
    insertMusic(music){
        return this.api.axios.post(`api/musics/insert_music/`, music, { "Content-Type": "multipart/form-data" })
    }

    getArtists() {
        return this.api.axios.get(`api/artist/`)
    }

    getGeneros() {
        return this.api.axios.get(`api/genero/`)
    }
    
}


export default MusicRegistrationService