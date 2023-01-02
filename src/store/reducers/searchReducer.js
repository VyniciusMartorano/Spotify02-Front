import { INSERT_TEXT_IN_SEARCH, REFRESH_RESULTS_OF_SEARCH } from "../actions/actionTypes"


const initialState = {
    text_filter: '',
    search_results: []
}


const searchReducer = (state = initialState, action)  => {
    switch (action.type) {
        case INSERT_TEXT_IN_SEARCH:
            return {text_filter: action.payload.text_filter}
        
        case REFRESH_RESULTS_OF_SEARCH:
            return {search_results: action.payload.search_results}

        default:
            return state
    }
}


export default searchReducer