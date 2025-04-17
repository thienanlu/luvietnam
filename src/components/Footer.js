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
                    <div className='col-lg-4 col-sm-12 footer-col footer-logo-wrapper'>
                        <Link to="/"><img src={logo} alt="logo-luvietnam" className='footer-logo' /></Link>
                    </div>
                    <div className='col-lg-4 col-sm-12 footer-col'>
                        <h4>Lu Vietnam</h4>
                        <p>Tư vấn - Thiết kế - Setup quán ăn</p>
                    </div>
                    <div className='col-lg-4 col-sm-12 footer-col'>
                        <div className='social-media-link'>
                            <h4>Theo dõi chúng tôi</h4>
                            <Link to="https://www.facebook.com/profile.php?id=61571922065354&sk=about" target="_blank"><i class="fa-brands fa-facebook first-icon"></i></Link>
                            <Link target="_blank" to="https://www.tiktok.com/@setupquanbunbohue?is_from_webapp=1&sender_device=pc"><i class="fa-brands fa-tiktok"></i></Link>
                            <Link to="/contact"><i class="fa-solid fa-envelope"></i></Link>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <p>Copyright<i className='fa-regular fa-copyright'></i>{year} Lu Vietnam - Designed by <Link to="https://linkedin.com" target='_blank'>Lữ Hoàng Thiên Ân</Link></p>
                </div>
        </div>
    )
}

export default Footer;