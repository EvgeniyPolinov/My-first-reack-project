import g from './AllPeople.module.css'
import React from 'react'
import { followAC, setUsersAC, unfollowAC } from '../../../../redux/usersReduser'
import { connect } from 'react-redux'
import AllPeople from './AllPeople'


    let mapStateToProps = (state) => {
        return{
            users: state.friendsPage.users
        }
    }
    let mapDispatchToProps = (dispatch) => {
        return {
            follow: (userId) => {
                dispatch(followAC(userId));
            },
            unfollow: (userId) => {
                dispatch(unfollowAC(userId));
            },
            setUsers: (users) => {
                dispatch(setUsersAC(users));
            },        
        }
    }    


const AllPeopleContainer = connect(mapStateToProps, mapDispatchToProps)(AllPeople)

export default AllPeopleContainer;