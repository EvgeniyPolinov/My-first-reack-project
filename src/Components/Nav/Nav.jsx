import classes from './Nav.module.css'


const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.navConteiner}>
                <div className={classes.gap40px}></div>
                <a className={classes.item} href='/profile'>Гланвая</a>
                <a className={classes.item} href='/dialogs'>Сообщения</a>
                <a className={classes.item} href='#'>Музыка</a>
                <a className={classes.item} href='#'>Новости</a>
            </div>
        </nav>
    )
}

export default Nav;