import { INSERT_TEXT_IN_SEARCH, REFRESH_RESULTS_OF_SEARCH, SET_OPTION_SEARCH } from "../actions/actionTypes"
import SEARCH_OPTIONS from "../../utils/enums/enumSearchOptions"

const initialState = {
    text_filter: '',
    search_results: [],
    optionSearch: SEARCH_OPTIONS.MUSIC
}


const searchReducer = (state = initialState, action)  => {
    switch (action.type) {
        case INSERT_TEXT_IN_SEARCH:
            return {...state, text_filter: action.payload.text_filter}
        
        case REFRESH_RESULTS_OF_SEARCH:
            return {...state, search_results: action.payload.search_results}

        case SET_OPTION_SEARCH:
            return {...state, optionSearch: action.payload.optionSearch}
        default:
            return state
    }
}


export default searchReducer