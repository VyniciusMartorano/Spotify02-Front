import { SET_CURRENT_MUSIC, SET_VOLUME } from "../actions/actionTypes"


const initialState = {
    currentMusic: {},
    volume: 30,
}



const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_MUSIC:
            return {...state, currentMusic: action.payload.currentMusic}
        case SET_VOLUME:
            return {...state, volume: action.payload.volume}
        default:
            return state
    }
}



export default musicReducer