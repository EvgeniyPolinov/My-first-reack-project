import g from './ListFriends.module.css'
import React from 'react' 
import { Route, Routes } from 'react-router-dom'
import MyFriends from './MyFriends/MyFriends'
import AllPeople from './AllPeople/AllPeople'


let ListFriends = () => {
    return (
        <div className={g.wrapper}>
            <Routes>
                <Route index element={<MyFriends />} />
                <Route path='/myFriends' element={<MyFriends />}></Route>
                <Route path='/AllPeople' element={<AllPeople />}></Route>
            </Routes>
        </div>
    )
}



export default ListFriends