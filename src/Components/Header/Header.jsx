import h from "./Header.module.css"
import group1 from '../../img/group1.svg'


const Header = () => {
    return (
        <header className={h.header}>
            <a href="#" className="logo">
                <img src={group1} alt="logo" className={h.img}/>
            </a>
        
        </header>
    )
}

export default Header;