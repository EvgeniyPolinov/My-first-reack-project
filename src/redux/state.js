import { rerender } from "../render";

let state = {
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
        dialogData: [
            {id: 1, name: 'Aslan'},
            {id: 2, name: 'Maria'},
            {id: 3, name: 'Ramila'},
         ],
    },  
        
}


export let addPost = (postMessage) => {
    let newPost ={
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';

    rerender(state);

}



export let changeNewPostText = (newText) => {
    state.profilePage.newPostText = newText;

    rerender(state);

}


export default state;