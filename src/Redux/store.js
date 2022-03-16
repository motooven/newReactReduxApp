import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";


const reducers = combineReducers({
    profileItems: profileReducer,
    dialogItems: dialogReducer,
})

const store = createStore(reducers)

export default store