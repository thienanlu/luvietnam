import { Link } from 'react-router';

// import image
import logo from '../assets/img/logo.jpg'

// import css files
import '../assets/css/footer.css'

function Footer(){
    let day = new Date()
    let year = day.getFullYear()
    return (
        <div className="footer container-fluid">
                <div className='row footer-wrapper'>
                    <div className='col-lg-6 col-sm-12 footer-col footer-logo-wrapper'>
                        <Link to="/luvietnam"><img src={logo} alt="logo-luvietnam" className='footer-logo' /></Link>
                    </div>
                    {/* <div className='col-lg-4 col-md-6 col-sm-12 footer-col'>
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
                    </div> */}
                    <div className='col-lg-6 col-sm-12 footer-col'>
                        <div className='social-media-link'>
                            <h4>Theo dõi chúng tôi</h4>
                            <Link to="https://facebook.com"><i class="fa-brands fa-facebook first-icon"></i></Link>
                            <Link to="https://tiktok.com"><i class="fa-brands fa-tiktok"></i></Link>
                            <Link to="/contact"><i class="fa-solid fa-envelope"></i></Link>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <p>Copyright<i className='fa-regular fa-copyright'></i>{year} Luvietnam - Designed by <Link to="http://linkedin.com/in/luhoangthienan" target='_blank'>Lữ Hoàng Thiên Ân</Link></p>
                </div>
        </div>
    )
}

export default Footer;