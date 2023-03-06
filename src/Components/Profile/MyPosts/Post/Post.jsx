import g from'./Post.module.css';


const Post = (props) => {
    return (
        <div>
            <div className={g.item}>
                <img  className={g.img} src="https://img2.freepng.ru/20180628/kxx/kisspng-computer-icons-avatar-operator-5b359bea4195b4.3136422315302399782687.jpg" />
                <div>{props.message}</div>
            </div>
            <div>Лайки {props.likesCount}</div>
        </div>
    );
}


export default Post;