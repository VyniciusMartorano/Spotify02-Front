import axios from "axios"

export default class PlayerService {

    url = 'http://127.0.0.1:10000/core'

    async get() {
        const response = await axios.get(`${this.url}/musics/`)
        return response.data
    }

    async consult (filters) {
        const response = await axios.post(`${this.url}/retrieve_musics/`, filters)
        return response.data
    }

    async post (music) {
        const response = await axios.post(`${this.url}/musics`, music)
        return response
    }

    delete (music) {
        const response = axios.delete(`${this.url}/${music.id}`)
        return response
    }
} 