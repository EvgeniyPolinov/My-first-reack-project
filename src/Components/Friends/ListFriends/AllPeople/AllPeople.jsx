import g from './AllPeople.module.css'
import React from 'react'


let AllPeople = (props) => {
    return(
        <div>
            {
                props.users.map(u => <div key='u.id'>
                    <div className={g.wrapperUser}>
                        <div><img className={g.photo} src={u.img}/></div>
                        <div className={g.contentUser}>
                            <div className={g.info}>
                                <div className={g.name}>{u.fullName}</div>
                                <div className={g.status}>{u.status}</div>
                                <div className={g.location}>{u.location.city} {u.location.country}</div>
                            </div>
                            <div className={g.followContainer}>
                                <div>
                                   { u.followed
                                        ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button>
                                        : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    )
}

export default AllPeople