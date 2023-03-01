import classes from './Nav.module.css'


const Nav = () => {
    return (
        <nav className={classes.nav}>
            <a className={classes.item} href='#'>Гланвая</a>
            <a className={classes.item} href='#'>Музыка</a>
            <a className={classes.item} href='#'>Новости</a>
            <a className={classes.item} href='#'>Сообщения</a>
        </nav>
    )
}

export default Nav;