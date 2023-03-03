import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css'



const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.navConteiner}>
                <div className={classes.gap40px}></div>
                <NavLink className = { navData => navData.isActive ? classes.active : classes.item } to='/profile'>Гланвая</NavLink>
                <NavLink className = { navData => navData.isActive ? classes.active : classes.item } to='/dialogs'>Сообщения</NavLink>
                <NavLink className = { navData => navData.isActive ? classes.active : classes.item } to='/friends'>Кореша</NavLink>
                <NavLink className = { navData => navData.isActive ? classes.active : classes.item } to='/novosti'>Новости</NavLink>
            </div>
        </nav>
    );
}

export default Nav;