import Api from "./../../../../services/api"




class Service {
    
    constructor() {
        this.api = new Api()
    }

    async setMusicLiked(music_id) {
        return await this.api.axios.post(`api/musicsliked/set_music_is_liked/`, {music_id})
    }



    
}


export default Service