import { CHANGE_USER, CHANGE_MID_COMPONENT, SET_SHUFFLE_MODE, SET_REPEAT_MODE } from "../actions/actionTypes"


const initialState = {

    user: {image: ''},
    midComponentActiveId: 1,
    shuffleMode: false,
    repeatMode: false
}


const searchReducer = (state = initialState, action)  => {
    switch (action.type) {
        case CHANGE_USER:
            return {...state, user: action.payload.user}
        
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