import {legacy_createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import playersreducer from "./Playersreducer/reducer";
import seriesUpcomingReducer from "./seriesPageReducer/reducer";
// import { authReducer } from "./auth/authreducer";
// import { reducer } from "./books/reducer";
const rootReducer = combineReducers({
     players : playersreducer,
     series: seriesUpcomingReducer
    // book: reducer,
    // auth: authReducer
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))