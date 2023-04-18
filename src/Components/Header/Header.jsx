import h from "./Header.module.css"
import group1 from '../../img/group1.svg'
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return (
        <header className={h.header}>
            <a href="#" className="logo">
                <img src={group1} alt="logo" className={h.img}/>
            </a>
            <div className={h.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        
        </header>
    )
}

export default Header;