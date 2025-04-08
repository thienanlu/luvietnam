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
import productImg1 from '../assets/img/product-item-1.jpg'
import productImg2 from '../assets/img/product-item-2.jpg'
import productImg3 from '../assets/img/product-item-3.jpg'
import founderImg from '../assets/img/founder-img.jpg'

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
                    <div className="home-about-textbox col-lg-8 col-md-6 col-sm-12">
                        <h2 className="home-section-title">Về chúng tôi</h2>
                        <p><b>Lu Vietnam - Thiết kế và setup quán ăn chuyên nghiệp.</b> <p>Chúng tôi biến ý tưởng của bạn thành không gian ẩm thực độc đáo, thu hút và hiệu quả. 
                            Tin cậy Lu Vietnam để khởi đầu hành trình kinh doanh đầy cảm hứng!</p> </p>
                        <ButtonComponent link='/about' text="Tìm hiểu thêm" />
                    </div>
                    <img src={founderImg} alt="luvietnam logo" className="col-lg-3 col-md-4 col-sm-12 app-section-img" loading="lazy" />
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
                        <p>Chúng tôi mang đến giải pháp toàn diện với nội thất chất lượng và nguyên liệu tươi ngon, giúp bạn xây dựng không gian và thực đơn hoàn hảo. Đồng hành cùng Lu Vietnam để tạo nên dấu ấn riêng cho quán ăn của bạn!</p>
                    </div>
                    <div className="home-product-gallery container">
                        <div className="row home-product-gallery-wrapper">
                            <div className="col-lg-4 col-md-4 col-sm-12 home-product-gallery__item">
                                <img src={productImg1} alt="product 1" className="" loading="lazy" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 home-product-gallery__item">
                                <img src={productImg2} alt="product 2" className="" loading="lazy" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 home-product-gallery__item">
                                <img src={productImg3} alt="product 3" className="" loading="lazy" />
                            </div>
                        </div>
                        <Link to="/product">Xem thêm <i className="fa-solid fa-arrow-right"></i></Link>
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