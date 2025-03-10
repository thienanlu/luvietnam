import { NavLink, Link, ScrollRestoration } from 'react-router'
import ScrollToTop from './ScrollToTop'

// import images
import logo from '../assets/img/logo.jpg'
import '../assets/css/header.css'


function Header(props){
    return (
        <div className="header">
            <div className="utilities">
                <ul className='utilities-list'>
                    <li><i class="fa-regular fa-envelope"></i>lufoodvietnam@gmail.com</li>
                    <li><i class="fa-regular fa-clock"></i>08:30 - 17:00</li>
                    <li><i class="fa-solid fa-phone"></i>0906 756 711</li>
                </ul>
            </div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid nav-wrapper">
                <Link to="/luvietnam" class="navbar-brand">
                    <img src={logo} alt="logo-luvietnam" className='navbar-logo'/>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class={props.active == "1" ? "nav-item active-item" : "nav-item"}>
                        <Link to="/luvietnam/" class="nav-link" aria-current="page" href="#">Trang chủ</Link>
                    </li>
                    <li class={props.active == "2" ? "nav-item active-item" : "nav-item"}>
                        <Link to="/about" class="nav-link" href="#">Giới thiệu</Link>
                    </li>
                    <li class={props.active == "3" ? "nav-item active-item" : "nav-item"}>
                        <Link to="/blog" class="nav-link" href="#">Tin tức</Link>
                    </li>
                    <li class={props.active == "4" ? "nav-item active-item" : "nav-item"}>
                        <Link to="/services" class="nav-link" href="#">Dịch vụ</Link>
                    </li>
                    <li class={props.active == "5" ? "nav-item active-item" : "nav-item"}>
                        <Link to="/product" class="nav-link">Sản phẩm</Link>
                    </li>
                    <li class={props.active == "6" ? "nav-item active-item" : "nav-item"}>
                        <Link to="/contact" class="nav-link">Liên hệ</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header