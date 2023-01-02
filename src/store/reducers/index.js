import { combineReducers } from "redux";
import myReducer from "./myReducer";
import searchReducer from "./searchReducer";



const rootReducer = combineReducers({
    myReducer,
    searchReducer
})


export default rootReducer