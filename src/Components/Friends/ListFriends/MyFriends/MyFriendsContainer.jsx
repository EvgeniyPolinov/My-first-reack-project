
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../../../redux/usersReduser'
import { connect } from 'react-redux'
import MyFriends from './MyFriends'


    let mapStateToProps = (state) => {
        return{
            users: state.friendsPage.users,
            totalUsersCount: state.friendsPage.totalUsersCount,
            pageSize: state.friendsPage.pageSize,
            currentPage: state.friendsPage.currentPage
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
            setCurrentPage: (pageNumber) => {
                dispatch(setCurrentPageAC(pageNumber))
            },
            setTotalUsersCount: (totalCount) => {
                dispatch(setTotalUsersCountAC(totalCount))
            },             
        }
    }    


const MyFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(MyFriends)

export default MyFriendsContainer;