import { combineReducers } from "redux"
import searchReducer from "./searchReducer"
import coreReducer from "./coreReducer"
import musicReducer from "./musicReducer"


const rootReducer = combineReducers({
    searchReducer,
    coreReducer,
    musicReducer,
})


export default rootReducer