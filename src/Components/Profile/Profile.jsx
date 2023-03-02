import g from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
        <div>
            <div className={g.img}>Типо моя фотка</div>
            <div className={g.info}>Типо мои новости</div>
            <MyPosts />
        </div>
    )
}

export default Profile;