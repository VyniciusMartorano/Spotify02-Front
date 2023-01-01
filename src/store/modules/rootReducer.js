import { combineReducers } from "redux";
import myReducer from "../reducers/myReducer";
import exampleReducer from "./example/reducer"


const rootReducer = combineReducers({
    example: exampleReducer,
    myReducer 
})


export default rootReducer