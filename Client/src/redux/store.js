import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk"

const composerEnhancer = window._REDUX_DEVTOOLS_EXTENSION_ || compose

const store = createStore(
    rootReducer, 
    composerEnhancer(applyMiddleware(thunkMiddleware)));

export default store; 
