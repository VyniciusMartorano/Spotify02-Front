import { CHANGE_USER, CHANGE_MID_COMPONENT, SET_SHUFFLE_MODE, SET_REPEAT_MODE, SET_IS_LOGGED } from "../actions/actionTypes"
import { doLogout, getToken } from "../../utils/localStorage/auth"
import { getCurrentUser } from "../../utils/localStorage/user"
import resetLocalStorage from "../../utils/localStorage/resetLocalStorage"

const initialState = {

    user: getCurrentUser() || {image: ''},
    midComponentActiveId: 1,
    shuffleMode: false,
    repeatMode: false,
    isLogged: getToken()
}


const coreReducer = (state = initialState, action)  => {
    switch (action.type) {
        case CHANGE_USER:
            return {...state, user: action.payload.user}
        
        case SET_IS_LOGGED:
            if (action.payload.isLogged == false)  {
                doLogout()
                resetLocalStorage()
            }
            
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


export default coreReducer