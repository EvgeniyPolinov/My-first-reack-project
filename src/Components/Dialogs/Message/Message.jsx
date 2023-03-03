import { NavLink } from 'react-router-dom';
import g from './Message.module.css'


const Message = (props) => {
    return(
        <div className={g.message}>
            <img  className={g.img} src="https://img2.freepng.ru/20180628/kxx/kisspng-computer-icons-avatar-operator-5b359bea4195b4.3136422315302399782687.jpg" />
            <div>{props.message}</div>
        </div>
    );
}


export default Message