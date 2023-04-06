import React from 'react'
import axios from 'axios';
import AllPeople from './AllPeople';
import preloader from './../../../../img/preloder3.svg'


class AllPeopleAPIComponent extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setFetching(false)
            });
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
                            />
        </>
    }
}
export default AllPeopleAPIComponent