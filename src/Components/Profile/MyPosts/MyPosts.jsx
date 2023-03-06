import g from'./MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {


    let postData = [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message:"It`s my first post", likesCount: 32},
        {id: 3, message:'Hi bro', likesCount: 32}
    ]

    let postElemens = postData.map( post => <Post message={post.message} likesCount={post.likesCount}/>);
    

    

    return (
        <div className={g.PostsConteiner}>
            My Posts
            <div>
                <input></input>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={g.item}>
                {postElemens}
            </div>
        </div>
    );
}

export default MyPosts;