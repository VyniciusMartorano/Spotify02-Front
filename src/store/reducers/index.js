import { combineReducers } from "redux"
import searchReducer from "./searchReducer"
import coreReducer from "./coreReducer"


const rootReducer = combineReducers({
    searchReducer,
    coreReducer
})


export default rootReducer