let store ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message:"It`s my first post", likesCount: 32},
                {id: 3, message:'Hi bro', likesCount: 32}
            ],
            newPostText: '',
    
        },
        messagesPage: {
            messageData: [
                {id: 1, message:'hi'},
                {id: 2, message:'hihi'},
                {id: 3, message:'hihihi'},
            ],
            newMessageText: '',
            dialogData: [
                {id: 1, name: 'Aslan'},
                {id: 2, name: 'Maria'},
                {id: 3, name: 'Ramila'},
             ],
        },  
            
    },
    getState() {
        return this._state;
    },
    _rerender()  {
        console.log('');
    },   
    subscribe(observer)  {
        this._rerender = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
                let newPost ={
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0,
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
            
                this._rerender(this._state);
            
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
                this._state.profilePage.newPostText = action.newText;
            
                this._rerender(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
                let newMessage = {
                    id: 4,
                    message: this._state.messagesPage.newMessageText,
                };
                this._state.messagesPage.messageData.push(newMessage);
                this._state.messagesPage.newMessageText = '';              
                this._rerender(this._state);          
        } else if (action.type === 'CHANGE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newText;
            this._rerender(this._state);
        }
    }

}


export const AddPostActionCreater = () => ({
        type:'ADD-POST',
    })
export const UpdateNewPostTextActionCreater = (text) => ({
        type:'UPDATE-NEW-POST-TEXT',
        newText: text,
})
export const AddMessageActionCreater = () => ({
    type: 'ADD-MESSAGE',
})
export const UpdateNewMessageActionCreater = (text) => ({
    type: 'CHANGE-NEW-MESSAGE-TEXT',
    newText: text,
})



export default store;