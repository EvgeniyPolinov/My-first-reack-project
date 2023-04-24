import g from './ProfileInfo.module.css'
import preloader from './../../../img/preloder3.svg'
import ProfileStatus from './Status';



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <img src={preloader} />
    }
    return (
        <div className={g.profileList}>
            <img className={g.img} src={props.profile.photos.large} />
            <div className={g.profileInfo}>
                <div className={g.fullName}>{props.profile.fullName}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    );
}


export default ProfileInfo