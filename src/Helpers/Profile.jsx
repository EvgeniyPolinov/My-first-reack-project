import g from'./Profile.module.css';


const Profile = () => {
    return (
        <div className='conten'>
            <div className={g.img}>Типо моя фотка</div>
            <div className={g.info}>Типо мои новости</div>
            <div className={g.footer}>Типо мои друзья</div>
        </div>
    )
}

export default Profile;