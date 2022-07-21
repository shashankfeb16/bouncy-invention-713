import {legacy_createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
// import { authReducer } from "./auth/authreducer";
// import { reducer } from "./books/reducer";
const rootReducer = combineReducers({
    // book: reducer,
    // auth: authReducer
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))