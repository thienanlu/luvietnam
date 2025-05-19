import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider} from "react-helmet-async";

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
import homeVideo from '../assets/img/video-1.mp4'
import logo from '../assets/img/logo.jpg'

function Home(){
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return(
        <>
        <Helmet prioritizeSeoTags>
            <link rel="shortcut icon" href="../assets/img/faviconlogo.ico" type="image/x-icon" />
            <title>Lu Vietnam - Thiết kế & Setup quán ăn</title>
            <meta name="description" content="Lu Vietnam là đơn vị chuyên cung cấp dịch vụ setup và thiết kế nội thất quán ăn chuyên nghiệp. Với đội ngũ giàu kinh nghiệm và sáng tạo, Lu Vietnam giúp bạn biến ý tưởng thành không gian thực tế, tối ưu hóa công năng và mang đến phong cách độc đáo, thu hút khách hàng." />
            <meta property="og:title" content="Lu Vietnam - Thiết kế & Setup nội thất quán ăn" />
            <meta property="og:image" content="logo.jpg" />
            <meta property="og:description" content="Lu Vietnam là đơn vị chuyên cung cấp dịch vụ setup và thiết kế nội thất quán ăn chuyên nghiệp" />
        </Helmet>
        <div className="home-wrapper">
            <Header active="1"/>
            <Carousel title="LUVIETNAM" text="TƯ VẤN - THIẾT KẾ - THI CÔNG SETUP QUÁN - ĐÀO TẠO BẾP"/>

            {/* about section */}
            <section className="home-about-section container-fluid app-item">
                <div className="row align-items-center justify-content-between">
                    <div className="home-about-textbox col-lg-7 col-sm-12">
                        {/* <h2 className="home-section-title">Về chúng tôi</h2> */}
                        <p><b>Lu Vietnam - Thiết kế và setup quán ăn chuyên nghiệp.</b> <p>Bạn đang có ý tưởng mở quán ăn nhưng chưa biết bắt đầu từ đâu? Hãy để Lu Vietnam đồng hành cùng bạn!</p> 
                        <p>Với nhiều năm kinh nghiệm trong lĩnh vực F&B và quản trị nhà hàng khách sạn, đội ngũ chuyên gia của chúng tôi cung cấp giải pháp trọn gói từ tư vấn ý tưởng kinh doanh, thiết kế không gian, lựa chọn thiết bị - nguyên vật liệu, đến setup vận hành quán ăn một cách hiệu quả và tiết kiệm chi phí. </p>
                        </p>
                        <ButtonComponent link='/gioi-thieu' text="Tìm hiểu thêm" />
                    </div>
                    <video className="col-lg-4 col-sm-12 app-item-img" height="450px" autoPlay loop muted>
                        <source src={homeVideo} type="video/mp4" />
                    </video>
                </div>
            </section>

            {/* service intro section */}
            <section className="home-service-section container-fluid app-item">
                    <div className="home-service-textbox">
                        <h2 className="home-section-title">Dịch vụ</h2>
                        <p>Chúng tôi cung cấp cho bạn giải pháp tối ưu nhất, đưa những ý tưởng của bạn trở thành hiện thực. Dịch vụ trọn gói từ A – Z của chúng tôi bao gồm các bước từ lên ý tưởng – thiết kế - setup cho đến quy trình vận hành một quán ăn hoàn chỉnh</p>
                    </div>
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
                        <p>Chúng tôi chuyên cung cấp nội thất chuyên dụng cho quán ăn và nguyên liệu thực phẩm chất lượng cao, đáp ứng đa dạng mô hình từ quán ăn vỉa hè đến nhà hàng chuyên nghiệp. </p>
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
                        <Link to="/san-pham">Xem thêm <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </section>
            <ContactBanner />
            <CallBtn />
            <Footer />
        </div>
        </>
    )
}

export default Home;