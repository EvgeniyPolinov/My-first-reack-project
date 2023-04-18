import { userAPI } from "../api/api";




let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    followingInPrograss: [],
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
        case 'TOGGLE_IS_FETCHING':{
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE_IN_PROGRASS':{
            return {...state,
                    followingInPrograss: action.isFetching ? [...state.followingInPrograss, action.userId] : 
                                                            state.followingInPrograss.filter(id => id != action.userId)}
        }
        default:
            return state
    }
}

export const follow = (userId) => ({type: 'FOLLOW', userId}) 
export const unfollow = (userId) => ({type: 'UNFOLLOW', userId}) 
export const setUsers = (users) => ({type: 'SETUSERS', users})
export const setCurrentPage = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount})
export const setFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching})
export const toggleInPrograss = (isFetching, userId) => ({type: 'TOGGLE_IN_PROGRASS', isFetching, userId})

export const getUsers = (currentPage, pageSize)  => {

    return (dispatch) => {

        dispatch(setFetching(true))
            userAPI.getUsers(currentPage, pageSize).then(data => {
                    dispatch(setFetching(false))
                    dispatch(setUsers(data.items))
                    dispatch(setTotalUsersCount(data.totalCount))
                });
        }
}
export const unfollowThunk = (userId) => {
    debugger
    return (dispatch) => {
        dispatch(toggleInPrograss(true, userId))
        userAPI.unfollowThunk(userId)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(unfollow(userId))
                }
                dispatch(toggleInPrograss(false, userId))
            });
    }
}
export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleInPrograss(true, userId))
        userAPI.followThunk(userId)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(follow(userId))
                }
                dispatch(toggleInPrograss(false, userId))
            });
    }
}



export default usersReduser;