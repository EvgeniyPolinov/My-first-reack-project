



let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1
} 

let usersReduser = (state = initialState, action) => {
    switch(action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
                    
            }
        case 'UNFOLLOW':
            return {...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
                    
            }
        case 'SETUSERS':{
            return {...state, users: [...action.users]}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_USERS_COUNT':{
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: 'FOLLOW', userId}) 
export const unfollowAC = (userId) => ({type: 'UNFOLLOW', userId}) 
export const setUsersAC = (users) => ({type: 'SETUSERS', users})
export const setCurrentPageAC = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount})


export default usersReduser;