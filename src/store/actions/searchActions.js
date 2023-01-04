import { INSERT_TEXT_IN_SEARCH, REFRESH_RESULTS_OF_SEARCH, SET_OPTION_SEARCH } from "./actionTypes"

export const actInsertTextSearch = (payload) => ({
    type: INSERT_TEXT_IN_SEARCH,
    payload
})

export const actRefreshResultsOfSearch = (payload) => ({
    type: REFRESH_RESULTS_OF_SEARCH,
    payload
})

export const actSetOptionSearch = (payload) => ({
    type: SET_OPTION_SEARCH,
    payload
})