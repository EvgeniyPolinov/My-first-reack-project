
import { followAC, setUsersAC, unfollowAC } from '../../../../redux/usersReduser'
import { connect } from 'react-redux'
import MyFriends from './MyFriends'


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


const MyFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(MyFriends)

export default MyFriendsContainer;