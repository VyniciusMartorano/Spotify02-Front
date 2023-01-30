import { SET_CURRENT_MUSIC, SET_VOLUME, SET_CURRENT_MUSIC_LIKED } from "../actions/actionTypes"


const initialState = {
    currentMusic: {},
    volume: 40,
}



const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_MUSIC:
            return {...state, currentMusic: action.payload.currentMusic}

        case SET_VOLUME:
            return {...state, volume: action.payload.volume}

        case SET_CURRENT_MUSIC_LIKED:
            let newState = {...state}
            newState.currentMusic.is_liked = action.payload.is_liked
            return newState

        default:
            return state
    }
}


export default musicReducer