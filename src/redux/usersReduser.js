



let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Maria', status: 'I love coocking', location: {city: 'N Novgorod', country: 'Russia'}},
        {id: 1, followed: false, fullName: 'Aslan', status: 'hey brooo', location: {city: 'Krasnodar', country: 'Russia'}},
        {id: 1, followed: false, fullName: 'Nikita', status: 'OMG', location: {city: 'N Novgorod', country: 'Russia'}},
        {id: 1, followed: false, fullName: 'Ramila', status: 'mini RU or Ramila Umiarovna', location: {city: 'N Novgorod', country: 'Russia'}},
    ]
} 

let usersReduser = (state = initialState, action) => {
    switch(action.type) {
        case 'FOLLOW':
            let stateCopy = {...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
                    
            }
        case 'UNFOLLOW':

        default:
            return state
    }
}

export const followAC = (userId) => ({type: 'FOLLOW', userId}) 
export const unfollowAC = (userId) => ({type: 'UNFOLLOW', userId}) 


export default usersReduser;