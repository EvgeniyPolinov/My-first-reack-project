import g from './Message.module.css'
import React from 'react';


const Message = (props) => {

 



    return(
        <div>
            
            <div className={g.message}>
                <img  className={g.img} src="https://img2.freepng.ru/20180628/kxx/kisspng-computer-icons-avatar-operator-5b359bea4195b4.3136422315302399782687.jpg" />
                <div>{props.message}</div>
            </div>
        </div>
    );
}


export default Message