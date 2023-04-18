import { NavLink } from 'react-router-dom'
import { userAPI } from '../../../../api/api'
import g from './AllPeople.module.css'


let AllPeople = (props) => {
        let pages = []
        for (let i=1; i<=10; i++) {
            pages.push(i)
        }
        debugger
    return <div>  
        
        { props.users.map(u => <div key={u.id}>
                <div className={g.wrapperUser}>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={g.photo} alt='#' src={u.photos.small != null ? u.photos.small : 'https://rognowsky.ru/wp-content/uploads/2019/09/u55628068.jpg'}/>
                    </NavLink>
                    <div className={g.contentUser}>
                        <div className={g.info}>
                            <div className={g.name}>{u.name}</div>
                            <div className={g.status}>{u.status}</div>
                            <div className={g.location}>{'u.location.city'} {'u.location.country'}</div>
                        </div>
                        <div className={g.followContainer}>
                            <div>
                               { u.followed
                                    ? <button disabled={props.followingInPrograss.some(id => id === u.id)} onClick={() => {props.unfollowThunk(u.id)}}>Unfollow</button>
                                    : <button  disabled={props.followingInPrograss.some(id => id === u.id)} onClick={() => {props.followThunk(u.id)}}>Follow</button>}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>)
        }
        <div className={g.listWrapper}>
                <div>{pages.map(u => <span className={props.currentPage === u ? g.listNumberBold : g.listNumber} onClick={() => {props.onPageChanged(u)}}>{u}</span>)}</div>  
            </div>
    </div>
    
}

export default AllPeople