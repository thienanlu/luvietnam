import { useEffect } from "react";
import { Link } from "react-router";

// import components
import ButtonComponent from "./Button";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import HomeServiceCard from "./HomeServiceCard";
import ContactBanner from "./ContactBanner";
import CallBtn from "./CallBtn";


// import css files
import '../assets/css/home.css'
import '../assets/css/responsive.css'
// import image
import logo from '../assets/img/logo.jpg'
import productImg1 from '../assets/img/product-item-1.jpg'
import productImg2 from '../assets/img/product-item-2.jpg'
import productImg3 from '../assets/img/product-item-3.jpg'

function Home(){
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return(

        <div className="home-wrapper">
            <Header active="1"/>
            <Carousel title="LUVIETNAM" text="TƯ VẤN - THIẾT KẾ - THI CÔNG SETUP QUÁN - ĐÀO TẠO BẾP"/>
            {/* about section */}
            <section className="home-about-section container-fluid app-item">
                <div className="row align-items-center justify-content-between">
                    <div className="home-about-textbox col-lg-8 col-md-12 col-sm-12">
                        <h2 className="home-section-title">Về chúng tôi</h2>
                        <p>Chúng tôi cung cấp dịch vụ tư vấn - thiết kế - thi công setup nhà hàng - đào tạo bếp chuyên nghiệp và cung cấp trang thiết bị & nội thất cho doanh nghiệp của bạn.</p>
                        <ButtonComponent link='/about' text="Tìm hiểu thêm" />
                    </div>
                    <img src={logo} alt="luvietnam logo" className="col-lg-4 col-md-12 col-sm-12 app-section-img" loading="lazy" />
                </div>
            </section>

            {/* service intro section */}
            <section className="home-service-section container-fluid app-item">
                <h3 className="home-section-title">Chúng tôi cung cấp</h3>
                <div className="home-service-card__wrapper row">
                    <HomeServiceCard title="Tư vấn - Thiết kế quán" icon="fa-solid fa-lightbulb"/>
                    <HomeServiceCard title="Set up quán" icon="fa-solid fa-gears"/>
                    <HomeServiceCard title="Đào tạo bếp" icon="fa-solid fa-kitchen-set"/>
                </div>
            </section>

            {/* product section */}
            <section className="home-product-section container-fluid app-item">
                <div className="row">
                    <div className="home-product-textbox">
                        <h2 className="home-section-title">Sản phẩm</h2>
                        <p>Chúng tôi cung cấp dịch vụ tư vấn - thiết kế - thi công setup nhà hàng - đào tạo bếp chuyên nghiệp và cung cấp trang thiết bị & nội thất cho doanh nghiệp của bạn.</p>
                    </div>
                    <div className="home-product-gallery container">
                        <div className="row home-product-gallery-wrapper">
                            <div className="col-lg-4 col-sm-12 home-product-gallery__item">
                                <img src={productImg1} alt="product 1" className="home-product-img" loading="lazy" />
                            </div>
                            <div className="col-lg-4 col-sm-12 home-product-gallery__item">
                                <img src={productImg2} alt="product 2" className="home-product-img" loading="lazy" />
                            </div>
                            <div className="col-lg-4 col-sm-12 home-product-gallery__item">
                                <img src={productImg3} alt="product 3" className="home-product-img" loading="lazy" />
                            </div>
                        </div>
                        <Link to="/product">Xem thêm <i class="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </section>
            <ContactBanner />
            <CallBtn />
            <Footer />
        </div>
    )
}

export default Home;