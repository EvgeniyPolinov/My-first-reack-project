import g from './NavFriends.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'



let NavFriends = () => {
    return(
        <div className={g.wrapper}>
            <NavLink className={navData => navData.isActive ? g.active : g.myfriends} to='myFriends'>Mои други и подруги</NavLink>
            <NavLink className={navData => navData.isActive ? g.active : g.AllPeople} to='AllPeople'>Все и даже не кореша</NavLink>
        </div>
    )
}

export default NavFriends