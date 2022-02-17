import logo from '../../assets/img/pixer-logo.png'

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <a href="/">
                        <img src={logo} alt="logotip" width={58} height="20" />
                    </a>
                </div>
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a className="navbar-link" href="/">Bosh sahifa</a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-link" href="/">Xizmatlar</a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-link" href="/">Portfolio</a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-link" href="/">Jamoa</a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-link" href="/">Blog</a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-link" href="/">Kontaktlar</a>
                        </li>
                    </ul>
                </nav>

                <button className="blue-btn ">
                    <a className="header-tel" href="tel:+998909213711">+998 90 921 37 11</a>
                </button>
            </header>
        </>
    )
}
