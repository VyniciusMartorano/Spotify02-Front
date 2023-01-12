import { SET_CURRENT_MUSIC } from "./actionTypes"



export const actSetCurrentMusic = (payload) => {
    const core_api = process.env.REACT_APP_API_CORE_URL
    const url = `${core_api.substring(0, core_api.length - 1)}`
    const audio = new Audio(url + payload.currentMusic.file)

    payload.currentMusic.duration = audio.duration

    return ({
        type: SET_CURRENT_MUSIC,
        payload
    })
}