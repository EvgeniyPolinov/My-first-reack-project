
import React from 'react'    
import { AddPostActionCreater, UpdateNewPostTextActionCreater } from '../../../redux/profileReduser';
import MyPosts from './MyPosts';




const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(AddPostActionCreater());
    }
    
    let onPostChange = (text) => {
        let action = UpdateNewPostTextActionCreater(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}/>
    );
}

export default MyPostsContainer;