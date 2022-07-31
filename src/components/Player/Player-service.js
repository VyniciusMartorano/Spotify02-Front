import axios from "axios"

export default class PlayerService {

    url = ''

    async get() {
        const response = await axios.get(`${url}/musics`)
        return response.data
    }

    async consult (filters) {
        const response = await axios.post(`${url}/retrieve_musics/`, filters)
        return response.data
    }

    async post (music) {
        const response = await axios.post(`${url}/musics`, music)
        return response
    }

    delete (music) {
        const response = axios.delete(`${url}/${music.id}`)
        return response
    }
} 