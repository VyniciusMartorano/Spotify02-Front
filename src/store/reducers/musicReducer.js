import { SET_CURRENT_MUSIC } from "../actions/actionTypes"


const initialState = {
    currentMusic: {}
}



const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_MUSIC:
            return {...state, currentMusic: action.payload.currentMusic}
        default:
            return state
    }
}



export default musicReducer