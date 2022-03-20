import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import userReducer from "./userReducer";


const reducers = combineReducers({
    profileItems: profileReducer,
    dialogItems: dialogReducer,
    usersPage: userReducer,

})


const store = createStore(reducers)

window.store = store

export default store