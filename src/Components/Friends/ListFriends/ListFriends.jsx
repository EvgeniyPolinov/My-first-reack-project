import g from './ListFriends.module.css'
import React from 'react' 
import { Route, Routes } from 'react-router-dom'
import AllPeopleContainer from './AllPeople/AllPeopleContainer'
import MyFriendsContainer from './MyFriends/MyFriendsContainer'


let ListFriends = () => {
    return (
        <div className={g.wrapper}>
            <Routes>
                <Route index element={<MyFriendsContainer />} />
                <Route path='/myFriends' element={<MyFriendsContainer />}></Route>
                <Route path='/AllPeople' element={<AllPeopleContainer />}></Route>
            </Routes>
        </div>
    )
}



export default ListFriends