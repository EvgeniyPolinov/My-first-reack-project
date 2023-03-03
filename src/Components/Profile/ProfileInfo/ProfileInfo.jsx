import g from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return(
        <img className={g.img} src={props.img}/>
    );
}


export default ProfileInfo