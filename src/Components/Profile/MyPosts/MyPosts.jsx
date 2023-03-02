import g from'./MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={g.item}>
                <Post message='Hi, how are you'/>
                <Post message="It`s my first post"/>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;