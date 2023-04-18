
import { follow, setCurrentPage, setFetching, setTotalUsersCount, setUsers, unfollow, toggleInPrograss, getUsers, followThunk, unfollowThunk } from '../../../../redux/usersReduser'
import { connect } from 'react-redux'
import AllPeopleAPIComponent from './AllPeopleAPIComponent'


    let mapStateToProps = (state) => {
        return{
            users: state.friendsPage.users,
            totalUsersCount: state.friendsPage.totalUsersCount,
            pageSize: state.friendsPage.pageSize,
            currentPage: state.friendsPage.currentPage,
            isFetching: state.friendsPage.isFetching,
            followingInPrograss: state.friendsPage.followingInPrograss
        }
    }

const AllPeopleContainer = connect(mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,  
    setFetching,
    toggleInPrograss,
    getUsers,
    followThunk,
    unfollowThunk
})(AllPeopleAPIComponent)

export default AllPeopleContainer;