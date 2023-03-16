import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";
import usersReduser from "./usersReduser";


let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    friendsPage: usersReduser,
});


let store = createStore(redusers);


window.store = store;


export default store;