import React from 'react'
import AllPeople from './AllPeople';
import preloader from './../../../../img/preloder3.svg'
import { userAPI } from '../../../../api/api';


class AllPeopleAPIComponent extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
       this.props.getUsers()
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render() {
        return  <>
        {this.props.isFetching ? <img src={preloader}/> : null}
            <AllPeople  totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            onPageChanged={this.onPageChanged}
                            users={this.props.users}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            toggleInPrograss={this.props.toggleInPrograss}
                            followingInPrograss={this.props.followingInPrograss}
                            followThunk={this.props.followThunk}
                            unfollowThunk={this.props.unfollowThunk}
                            />
        </>
    }
}
export default AllPeopleAPIComponent