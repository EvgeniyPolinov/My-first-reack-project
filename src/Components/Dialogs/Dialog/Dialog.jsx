import g from './Dialog.module.css'
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return(
        <NavLink className={date => date.isActive ? g.active : g.dialog} to={'/dialogs/' + props.id}>{props.name}</NavLink>
    );
}





export default Dialog;