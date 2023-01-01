import { INSERIR } from "../actions/actionTypes"


const initialState = {
    texto: 'gfdg'
}


const myReducer = (state = initialState, action)  => {
    switch (action.type) {
        case INSERIR:
            return {texto: action.payload.texto}
    
        default:
            return state
    }
}


export default myReducer