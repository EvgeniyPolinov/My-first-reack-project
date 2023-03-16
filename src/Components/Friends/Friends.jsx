import g from './Friends.module.css'
import React from 'react' 
import ListFriends from './ListFriends/ListFriends';
import NavFriends from './NavFriends/NavFriends';


let Friends = (props) => {
    return (
        <div className={g.wrapper}>
            <div className={g.header}><NavFriends /></div>
            <div className={g.content}>
                <ListFriends />
            </div>
        </div>
    )
}

export default Friends;