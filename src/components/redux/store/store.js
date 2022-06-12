import finlaReducers from "../reducers/rootReducers";
import thunk from "redux-thunk";
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from "redux";

const store = createStore(finlaReducers,composeWithDevTools(applyMiddleware(thunk)));
export default store