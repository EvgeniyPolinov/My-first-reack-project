import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1c04f660-96b1-493d-a88f-faa076ab751e'
    },
})  


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data
            )},
    followThunk(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollowThunk(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(profileId){
        return instance.get(`profile/${profileId}`)
    }
 }


 export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
 }




