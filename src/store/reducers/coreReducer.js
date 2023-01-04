import { CHANGE_USER, CHANGE_MID_COMPONENT } from "../actions/actionTypes"


const initialState = {

    user: {image: ''},
    midComponentActiveId: 1

}


const searchReducer = (state = initialState, action)  => {
    switch (action.type) {
        case CHANGE_USER:
            return {...state,user: action.payload.user}
        
        case CHANGE_MID_COMPONENT:
            return {...state, midComponentActiveId: action.payload.midComponentActiveId}

        default:
            return state
    }
}


export default searchReducer