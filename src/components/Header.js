import { Link} from 'react-router-dom'

// import images
import logo from '../assets/img/logo.jpg'
import '../assets/css/header.css'


function Header(props){
    return (
        <div className="header">
            <div className="utilities">
                <ul className='utilities-list'>
                    <li><i className="fa-regular fa-envelope"></i>lufoodvietnam@gmail.com</li>
                    <li><i className="fa-regular fa-clock"></i>08:30 - 17:00</li>
                    <li><i className="fa-solid fa-phone"></i>0906 756 711</li>
                </ul>
            </div>
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid nav-wrapper">
                <Link to="/" classname="navbar-brand">
                    <img src={logo} alt="logo-luvietnam" className='navbar-logo'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={props.active === "1" ? "nav-item active-item" : "nav-item"}>
                        <Link to="/" className="nav-link" aria-current="page" href="#">Trang chủ</Link>
                    </li>
                    <li className={props.active === "2" ? "nav-item active-item" : "nav-item"}>
                        <Link to="/gioi-thieu" className="nav-link" href="#">Giới thiệu</Link>
                    </li>
                    <li className={props.active === "3" ? "nav-item active-item" : "nav-item"}>
                        <Link to="/tin-tuc" className="nav-link" href="#">Tin tức</Link>
                    </li>
                    <li className={props.active === "4" ? "nav-item active-item" : "nav-item"}>
                        <Link to="/dich-vu" className="nav-link" href="#">Dịch vụ</Link>
                    </li>
                    <li className={props.active === "5" ? "nav-item active-item" : "nav-item"}>
                        <Link to="/san-pham" className="nav-link">Sản phẩm</Link>
                    </li>
                    <li className={props.active === "6" ? "nav-item active-item" : "nav-item"}>
                        <Link to="/lien-he" className="nav-link">Liên hệ</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header