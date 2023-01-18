import { CHANGE_USER, CHANGE_MID_COMPONENT, SET_SHUFFLE_MODE, SET_REPEAT_MODE, SET_IS_LOGGED } from "../actions/actionTypes"
import { getToken } from "../../services/auth"

const initialState = {

    user: {image: ''},
    midComponentActiveId: 1,
    shuffleMode: false,
    repeatMode: false,
    isLogged: getToken()
}


const searchReducer = (state = initialState, action)  => {
    switch (action.type) {
        case CHANGE_USER:
            return {...state, user: action.payload.user}
        
        case SET_IS_LOGGED:
            return {...state, isLogged: action.payload.isLogged}
        
        case CHANGE_MID_COMPONENT:
            return {...state, midComponentActiveId: action.payload.midComponentActiveId}
        
        case SET_SHUFFLE_MODE:
            return {...state, shuffleMode: action.payload.shuffleMode}

        case SET_REPEAT_MODE:
            return {...state, repeatMode: action.payload.repeatMode}

        default:
            return state
    }
}


export default searchReducer