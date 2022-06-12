import { combineReducers } from "redux";
import allReducers from "./allReducers";
import authReducer from "./authReducer";


const finlaReducers = combineReducers({
    studentsReducers : allReducers,
    loginState:authReducer
})
export default finlaReducers;