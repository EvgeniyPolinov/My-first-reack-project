
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow } from '../../../../redux/usersReduser'
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
 

const MyFriendsContainer = connect(mapStateToProps, {follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,  
    })(MyFriends)

export default MyFriendsContainer;