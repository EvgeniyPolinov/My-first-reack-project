
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../../../redux/usersReduser'
import { connect } from 'react-redux'
import AllPeople from './AllPeople'


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


const AllPeopleContainer = connect(mapStateToProps, mapDispatchToProps)(AllPeople)

export default AllPeopleContainer;