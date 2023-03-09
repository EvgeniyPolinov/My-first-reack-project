import g from'./MyPosts.module.css';
import Post from './Post/Post';
import React from 'react'    
import { AddPostActionCreater, UpdateNewPostTextActionCreater } from '../../../redux/state';




const MyPosts = (props) => {


    let postElemens = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>);
    
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(AddPostActionCreater());
    }
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(UpdateNewPostTextActionCreater(text));
    }

    return (
        <div className={g.PostsConteiner}>
            My Posts
            <div>
                <input  onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={g.item}>
                {postElemens}
            </div>
        </div>
    );
}

export default MyPosts;