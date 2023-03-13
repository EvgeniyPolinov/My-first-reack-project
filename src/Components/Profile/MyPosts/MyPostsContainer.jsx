import React from 'react'    
import { connect } from 'react-redux';
import { AddPostActionCreater, UpdateNewPostTextActionCreater } from '../../../redux/profileReduser';
import MyPosts from './MyPosts';




let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = UpdateNewPostTextActionCreater(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(AddPostActionCreater())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;