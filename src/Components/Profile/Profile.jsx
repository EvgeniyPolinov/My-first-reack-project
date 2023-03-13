import MyPostsContainer from './MyPosts/MyPostsContainer';
import g from'./Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <div className={g.profileList}>
                <ProfileInfo img="https://img2.freepng.ru/20180628/kxx/kisspng-computer-icons-avatar-operator-5b359bea4195b4.3136422315302399782687.jpg"/>
                <div className={g.profileInfo}>Это информация обо мне и тд и тп</div>
            </div>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;