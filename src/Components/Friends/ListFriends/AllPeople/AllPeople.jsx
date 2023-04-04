import g from './AllPeople.module.css'


let AllPeople = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = []
        for (let i=1; i<=10; i++) {
            pages.push(i)
        }
    return <div>  
        
        { props.users.map(u => <div key={u.id}>
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
                                    ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>)
        }
        <div className={g.listWrapper}>
                <div>{pages.map(u => <span className={props.currentPage === u ? g.listNumberBold : g.listNumber} onClick={() => {props.onPageChanged(u)}}>{u}</span>)}</div>  
            </div>
    </div>
    
}

export default AllPeople