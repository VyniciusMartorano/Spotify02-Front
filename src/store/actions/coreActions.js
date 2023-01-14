import { SET_SHUFFLE_MODE, CHANGE_MID_COMPONENT, SET_CURRENT_MUSIC_LIKED } from "./actionTypes"


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