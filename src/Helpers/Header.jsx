import h from "./Header.module.css"


const Header = () => {
    return (
        <header className={h.header}>
        <img  class={h.logo} src='https://e7.pngegg.com/pngimages/651/203/png-clipart-apple-logo-laptop-apple-heart-logo.png'/>
        </header>
    )
}

export default Header;