import { SET_CURRENT_MUSIC, SET_VOLUME, SET_CURRENT_MUSIC_LIKED } from "../actions/actionTypes"
import { getVolume, setVolume } from "../../utils/localStorage/volume"
import { getCurrentMusic, setCurrentMusic } from "../../utils/localStorage/currentMusic"




const initialState = {
    currentMusic: (getCurrentMusic() || {}),
    volume: (getVolume() || 40),
}


const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_MUSIC:
            setCurrentMusic(action.payload.currentMusic)
            return {...state, currentMusic: action.payload.currentMusic}

        case SET_VOLUME:
            setVolume(action.payload.volume)
            return {...state, volume: action.payload.volume}

        case SET_CURRENT_MUSIC_LIKED:
            let newState = {...state}
            newState.currentMusic.liked = action.payload.liked
            
            return newState

        default:
            return state
    }
}



export default musicReducer