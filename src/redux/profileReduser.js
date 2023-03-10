
let initiallState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message:"It`s my first post", likesCount: 32},
        {id: 3, message:'Hi bro', likesCount: 32}
    ],
    newPostText: '',
};


const profileReducer = (state = initiallState, action) => {

    switch(action.type) {
        case 'ADD-POST':
            let newPost ={
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state
        default: return state
        
    }
}

export const AddPostActionCreater = () => ({
    type:'ADD-POST',
})
export const UpdateNewPostTextActionCreater = (text) => ({
    type:'UPDATE-NEW-POST-TEXT',
    newText: text,
})

export default profileReducer