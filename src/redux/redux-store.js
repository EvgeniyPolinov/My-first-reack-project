import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReduser";
import usersReduser from "./usersReduser";
import authReduser from "./authReduser";
import thunkMiddleware from 'redux-thunk'

let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    friendsPage: usersReduser,
    auth: authReduser,
});


let store = createStore(redusers, applyMiddleware(thunkMiddleware));


window.store = store;


export default store;