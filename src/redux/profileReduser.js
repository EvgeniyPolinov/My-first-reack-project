import { ProfileAPI, userAPI } from "../api/api";

let initiallState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message:"It`s my first post", likesCount: 32},
        {id: 3, message:'Hi bro', likesCount: 32}
    ],
    newPostText: '',
    profile: null,
    status: ''
};


const profileReducer = (state = initiallState, action) => {

    switch(action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy
        }
        case "UPDATE-NEW-POST-TEXT":
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        default: return state
        case 'SET_STATUS':
            return {...state, status: action.status}
        
    }
}

export const AddPostActionCreater = () => ({
    type:'ADD-POST',
})
export const UpdateNewPostTextActionCreater = (text) => ({
    type:'UPDATE-NEW-POST-TEXT',
    newText: text,
})
export const setStatus = (status) => ({type: 'SET_STATUS', status})
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile})
export const getUserProfile = (profileId) => (dispatch) => {
    userAPI.getProfile(profileId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            });
}
export const getStatus = (profileId) => (dispatch) => (
    ProfileAPI.getStatus(profileId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
)
export const updateStatus = (status) => (dispatch) => (
    ProfileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
)

export default profileReducer