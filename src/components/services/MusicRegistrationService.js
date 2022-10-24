import axios from "axios"


class MusicRegistrationService {
    
    apiUrl = `http://127.0.0.1:10000/`
    
    
    DownloadUrlMusic(url) {
        return axios.post(`${this.apiUrl}api/musics/download_music_by_url/`, {url})
    }
    
    insertMusic(music){
        return axios.post(`${this.apiUrl}api/musics/insert_music/`, music, { "Content-Type": "multipart/form-data" })
    }

    getArtists() {
        return axios.get(`${this.apiUrl}api/artist/`)
    }

    getGeneros() {
        return axios.get(`${this.apiUrl}api/genero/`)
    }
    
}


export default MusicRegistrationService