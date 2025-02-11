// import components
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import ContactBanner from "./ContactBanner";

import logo from '../assets/img/logo.jpg'

import '../assets/css/about.css'

function About(){
    return(
        <div className="about">
            <Header />
            <Carousel title="ĐÔI NÉT VỀ LUVIETNAM" />
            <section className="home-about-section container-fluid app-item">
                <div className="row align-items-center justify-content-between">
                    <div className="home-about-textbox col-lg-8 col-sm-12">
                        <h2 className="home-section-title">Về chúng tôi</h2>
                        <p>Chúng tôi cung cấp dịch vụ tư vấn - thiết kế - thi công setup nhà hàng - đào tạo bếp chuyên nghiệp và cung cấp trang thiết bị & nội thất cho doanh nghiệp của bạn.</p>
                    </div>
                    <img src={logo} alt="luvietnam logo" className="col-lg-4 col-sm-12" />
                </div>
            </section>
            <section className="about-projects app-item">
                <h3 className="home-section-title about-projects-title">Một số dự án của Luvietnam</h3>
                <div className="about-project-gallery container">
                    <div className="row">

                    </div>
                </div>
            </section>
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default About;