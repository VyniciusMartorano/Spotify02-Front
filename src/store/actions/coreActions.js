import { 
    SET_SHUFFLE_MODE, 
    CHANGE_MID_COMPONENT, 
    SET_CURRENT_MUSIC_LIKED, 
    SET_REPEAT_MODE,
    SET_IS_LOGGED,
} from "./actionTypes"


export const actChangeMidComponent = (payload) => ({
    type: CHANGE_MID_COMPONENT,
    payload
})

export const actSetCurrentMusicIsLiked = (payload) => ({
    type: SET_CURRENT_MUSIC_LIKED,
    payload
})

export const actSetShuffleMode = (payload) => ({
    type: SET_SHUFFLE_MODE,
    payload
})

export const actSetRepeatMode = (payload) => ({
    type: SET_REPEAT_MODE,
    payload
})

export const actSetIsLogged = (payload) => ({
    type: SET_IS_LOGGED,
    payload
})