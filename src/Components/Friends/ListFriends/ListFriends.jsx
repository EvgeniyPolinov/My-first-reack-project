import g from './ListFriends.module.css'
import React from 'react' 
import { Route, Routes } from 'react-router-dom'
import MyFriends from './MyFriends/MyFriends'
import AllPeopleContainer from './AllPeople/AllPeopleContainer'


let ListFriends = () => {
    return (
        <div className={g.wrapper}>
            <Routes>
                <Route index element={<MyFriends />} />
                <Route path='/myFriends' element={<MyFriends />}></Route>
                <Route path='/AllPeople' element={<AllPeopleContainer />}></Route>
            </Routes>
        </div>
    )
}



export default ListFriends