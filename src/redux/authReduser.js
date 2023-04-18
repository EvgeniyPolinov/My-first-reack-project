import { authAPI } from "../api/api"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
} 

let authReduser = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true 
            }
        
        default:
            return state
    }
}

export const setUserData = (userId, email, login) => ({type:'SET_USER_DATA', data: {userId, email, login}})

export const getUserData = () => (dispatch) => {
    authAPI.me()
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setUserData(id, email, login))
                }
            });
}



export default authReduser;