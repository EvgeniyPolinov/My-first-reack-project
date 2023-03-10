// import dialogsReducer from "./dialogsReduser";
// import profileReducer from "./profileReduser";


// let store ={
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you', likesCount: 12},
//                 {id: 2, message:"It`s my first post", likesCount: 32},
//                 {id: 3, message:'Hi bro', likesCount: 32}
//             ],
//             newPostText: '',
    
//         },
//         messagesPage: {
//             messageData: [
//                 {id: 1, message:'hi'},
//                 {id: 2, message:'hihi'},
//                 {id: 3, message:'hihihi'},
//             ],
//             newMessageText: '',
//             dialogData: [
//                 {id: 1, name: 'Aslan'},
//                 {id: 2, name: 'Maria'},
//                 {id: 3, name: 'Ramila'},
//              ],
//         },  
            
//     },
//     getState() {
//         return this._state;
//     },
//     _rerender()  {
//         console.log('');
//     },   
//     subscribe(observer)  {
//         this._rerender = observer;
//     },
//     dispatch(action) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
//         this._rerender(this._state);

//     }

// }

// export default store;