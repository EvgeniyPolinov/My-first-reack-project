import g from './AllPeople.module.css'
import React from 'react'
import axios from 'axios';


class AllPeople extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i=1; i<=10; i++) {
            pages.push(i)
        }
        return <div>  
        { this.props.users.map(u => <div key={u.id}>
                <div className={g.wrapperUser}>
                    <div><img className={g.photo} src={u.photos.small != null ? u.photos.small : 'https://rognowsky.ru/wp-content/uploads/2019/09/u55628068.jpg'}/></div>
                    <div className={g.contentUser}>
                        <div className={g.info}>
                            <div className={g.name}>{u.name}</div>
                            <div className={g.status}>{u.status}</div>
                            <div className={g.location}>{'u.location.city'} {'u.location.country'}</div>
                        </div>
                        <div className={g.followContainer}>
                            <div>
                               { u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(u.id)}}>Follow</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        }
        <div className={g.listWrapper}>
                <div>{pages.map(u => <span className={this.props.currentPage === u ? g.listNumberBold : g.listNumber} onClick={() => {this.onPageChanged(u)}}>{u}</span>)}</div>  
            </div>
    </div>
    }

}
export default AllPeople