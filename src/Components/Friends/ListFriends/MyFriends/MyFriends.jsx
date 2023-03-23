import g from './MyFriends.module.css'
import React from 'react'


let MyFriends = (props) => {
    
    let Friends = props.users.filter(u => u.followed === true)
    if (props.users.length === 0){
        props.setUsers([
            {id: 1, followed: true, fullName: 'Maria', status: 'I love coconut And chocolate', img: 'https://sun9-28.userapi.com/impg/kM9cTZvhkauLMiVBzwVs2J8bEhPQ8jJxA6NADw/9_X7BJga-nQ.jpg?size=564x1003&quality=95&sign=9c4f9863ca50ee4d7c7e4a24e8f6a47c&type=album', location: {city: 'N Novgorod', country: 'Russia'}},
            {id: 2, followed: true, fullName: 'Aslan', status: 'hey brooo', img: 'https://sun9-69.userapi.com/impg/bmAEXv1BZlPuf09uJyaLexmn5UMU4BbndM9ueA/1pl9hykyYFA.jpg?size=1280x1280&quality=96&sign=edee3b64a430bfee45ff35333e68493c&type=album', location: {city: 'Krasnodar', country: 'Russia'}},
            {id: 3, followed: true, fullName: 'Nikita', status: 'PSCHD RAVE', img: 'https://sun1-24.userapi.com/impg/c858328/v858328356/142b46/nePGdiJYRYg.jpg?size=810x1080&quality=96&sign=4ea795ba98f3d578c00b56299a177ea3&type=album', location: {city: 'N Novgorod', country: 'Russia'}},
            {id: 4, followed: true, fullName: 'Ramila', status: 'mini RU or Ramila Umiarovna', img: 'https://sun9-3.userapi.com/impf/29tlv5N5z_brAfhuNjzWfg-VJSVCF7lWTuLZaw/Oe07we081H4.jpg?size=810x1080&quality=96&sign=4a658eaa6fe4141d0828ca94c4734bf2&type=album', location: {city: 'N Novgorod', country: 'Russia'}},
            {id: 5, followed: false, fullName: 'А этот чел для теста моих друзей', status: 'Я не твой друг челик', img: 'https://avatanplus.com/files/resources/original/5c4f398158bac1689578a153.jpg', location: {city: 'N Novgorod', country: 'Russia'}},
        ]
        )
    }   

    return(
        <div>
            {Friends.map(u => <div key='u.id'>
                    <div className={g.wrapperUser}>
                        <div><img className={g.photo} src={u.img}/></div>
                        <div className={g.contentUser}>
                            <div className={g.info}>
                                <div className={g.name}>{u.fullName}</div>
                                <div className={g.status}>{u.status}</div>
                                <div className={g.location}>{u.location.city} {u.location.country}</div>
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
            

        </div>
    )
}

// нужно пропсы сюда прокинуть и все будет замечательно


export default MyFriends