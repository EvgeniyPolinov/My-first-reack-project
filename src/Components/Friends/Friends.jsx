import g from './Friends.module.css'
import React from 'react' 
import ListFriends from './ListFriends/ListFriends';
import NavFriends from './NavFriends/NavFriends';
import MyFriends from './ListFriends/MyFriends/MyFriends';


let Friends = (props) => {
    return (
        <div className={g.wrapper}>
            <NavFriends />
            <div className={g.content}>
                <ListFriends />
            </div>
        </div>
    )
}

export default Friends;