import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";


let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer
});


let store = createStore(redusers);


export default store;