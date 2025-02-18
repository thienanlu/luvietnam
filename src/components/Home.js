// import { Link } from "react-router";

// import components
import ButtonComponent from "./Button";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import HomeServiceCard from "./HomeServiceCard";
import ContactBanner from "./ContactBanner";


// import css files
import '../assets/css/home.css'
import '../assets/css/responsive.css'
// import image
import logo from '../assets/img/logo.jpg'
import productImg1 from '../assets/img/product-item-1.jpg'

function Home(){
    return(
        <div className="home-wrapper">
            <Header />
            <Carousel title="LUVIETNAM" text="TƯ VẤN - THIẾT KẾ - THI CÔNG SETUP QUÁN- ĐÀO TẠO BẾP"/>
            {/* about section */}
            <section className="home-about-section container-fluid app-item">
                <div className="row align-items-center justify-content-between">
                    <div className="home-about-textbox col-lg-8 col-sm-12">
                        <h2 className="home-section-title">Về chúng tôi</h2>
                        <p>Chúng tôi cung cấp dịch vụ tư vấn - thiết kế - thi công setup nhà hàng - đào tạo bếp chuyên nghiệp và cung cấp trang thiết bị & nội thất cho doanh nghiệp của bạn.</p>
                        <ButtonComponent link='/about' text="Tìm hiểu thêm" />
                    </div>
                    <img src={logo} alt="luvietnam logo" className="col-lg-4 col-sm-12" />
                </div>
            </section>

            {/* service intro section */}
            <section className="home-service-section container-fluid app-item">
                <h3 className="home-section-title">Dịch vụ của chúng tôi</h3>
                <div className="home-service-card__wrapper row">
                    <HomeServiceCard title="Tư vấn - Thiết kế quán" icon="fa-solid fa-lightbulb"/>
                    <HomeServiceCard title="Set up quán" icon="fa-solid fa-gears"/>
                    <HomeServiceCard title="Đào tạo bếp" icon="fa-solid fa-kitchen-set"/>
                </div>
            </section>

            {/* product section */}
            <section className="home-product-section container-fluid app-item">
                <div className="row align-items-center justify-content-between">
                    <div className="home-product-wrapper col-lg-4 col-sm-12 order-lg-1 order-sm-2 mt-sm-16">
                        {/* more image will be added here */}
                        <img src={productImg1} alt="sample product"/>
                    </div>
                    <div className="home-product-textbox col-lg-8 col-sm-12 order-lg-2 order-sm-1">
                        <h2 className="home-section-title">Sản phẩm</h2>
                        <p>Chúng tôi cung cấp dịch vụ tư vấn - thiết kế - thi công setup nhà hàng - đào tạo bếp chuyên nghiệp và cung cấp trang thiết bị & nội thất cho doanh nghiệp của bạn.</p>
                        <ButtonComponent link='/product' text="Xem ngay" />
                    </div>
                </div>
            </section>
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default Home;