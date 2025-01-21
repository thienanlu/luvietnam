import { Link } from 'react-router';

// import image
import logo from '../assets/img/logo.jpg'

// import css files
import '../assets/css/footer.css'

function Footer(){
    return (
        <div className="footer container-fluid">
                <div className='row footer-wrapper'>
                    <div className='col-lg-4 col-md-6 col-sm-12 footer-col'>
                        <Link to="/"><img src={logo} alt="logo-luvietnam" className='footer-logo' /></Link>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 footer-col'>
                        <ul className='footer-nav'>
                            <li>
                                <Link to='/'>Trang chủ</Link>
                            </li>
                            <li>
                                <Link to='/about'>Giới thiệu</Link>
                            </li>
                            <li>
                                <Link to='/services'>Dịch vụ</Link>
                            </li>
                            <li>
                                <Link to='/product'>Sản phẩm</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12footer-col'>
                        <div className='social-media-link'>
                            <Link to="/"><i class="fa-brands fa-facebook"></i>Lu Vietnam Facebook</Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer;