import { useState, useEffect } from "react";
import Slider from "react-slick";

// import components
import Header from "./Header";
import Footer from "./Footer";
import ContactBanner from "./ContactBanner";
import ProductTab1 from "./ProductTab1";
import ProductTab2 from "./ProductTab2";
import CallBtn from "./CallBtn";

import bannerImg from '../assets/img/carousel-img-2.webp'
import promotionImg from '../assets/img/carousel-img-4.webp'
import popularImg1 from '../assets/img/product/product-img-15.jpg'
import popularImg2 from '../assets/img/product/product-img-17.jpg'
import popularImg3 from '../assets/img/product/product-img-11.jpg'
import popularImg4 from '../assets/img/product/product-img-13.jpg'
import popularImg5 from '../assets/img/product/product-img-3.jpg'
import popularImg6 from '../assets/img/product/product-img-4.jpg'

import "../assets/css/product.css"

// handle active tab
function Product(){
    // scroll to top
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

    const [activeTab, setActiveTab] = useState(1);
    const [isActive1, setisActive1] = useState(true);
    const [isActive2, setisActive2] = useState(false);

    function handleTabChange(){
        if(activeTab === 1){
            setActiveTab(2);
            setisActive1(false);
            setisActive2(true)
        }
        else if(activeTab === 2){
            setActiveTab(1);
            setisActive1(true);
            setisActive2(false);
        }
    }
    // slider setting
    function ProductSlider() {
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1800,
          responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
          ]
        };
        return (
          <Slider {...settings} className="popular-product-slider">
            <div className="popular-product-item">
              <img src={popularImg1} alt="popular product"/>
            </div>
            <div className="popular-product-item">
              <img src={popularImg2} alt="popular product"/>
            </div>
            <div className="popular-product-item">
              <img src={popularImg3} alt="popular product"/>
            </div>
            <div className="popular-product-item">
              <img src={popularImg4} alt="popular product"/>
            </div>
            <div className="popular-product-item">
              <img src={popularImg5} alt="popular product"/>
            </div>
            <div className="popular-product-item">
              <img src={popularImg6} alt="popular product"/>
            </div>
          </Slider>
        );
      }
    return(
        <div className="product">
            <Header active="5"/>
            <section className="product-banner mt-114">
                <img src={bannerImg} alt="banner" className=""/>
                <h3>Sản phẩm của chúng tôi</h3>
            </section>
            <div className="product-service container-fluid">
                <div className="row justify-content-between">
                    <div className="col-lg-4 col-sm-12 product-service-item">
                        <i className="fa-solid fa-truck-fast"></i>
                        Giao hàng tận nơi
                    </div>
                    <div className="col-lg-4 col-sm-12 product-service-item">
                        <i className="fa-solid fa-phone"></i>
                        Hỗ trợ & Tư vấn 24/7
                    </div>
                    <div className="col-lg-4 col-sm-12 product-service-item">
                        <i className="fa-solid fa-dollar-sign"></i>
                        Giá luôn rẻ
                    </div>
                </div>
            </div>
            <div className="popular-product app-item">
                <h3 className="app-item-title">Sản phẩm nổi bật</h3>
                <ProductSlider />
            </div>
            <section className="promotion app-item">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-12 promotion-textbox">
                        <h5>Tháng 4 khuyến mãi lớn</h5>
                        <p>Trọn bộ combo nội thất quán cơm gà giá chỉ 99tr</p>
                    </div>
                    <img src={promotionImg} alt="promotion banner" className="col-lg-6 col-sm-12 promotion-img"/>
                </div>
            </section>
            <section className="product-wrapper app-item">
                <h3 className="home-section-title">Sản phẩm</h3>
                <nav className="product-nav">
                    <ul>
                        <li onClick={handleTabChange} className={isActive1 ? "nav-item active-item" : "nav-item"}>Cơm gà da giòn</li>
                        <li onClick={handleTabChange} className={isActive2 ? "nav-item active-item" : "nav-item"}>Bún bò huế</li>
                    </ul>
                </nav>
                {activeTab === 1 ? <ProductTab1 /> : <ProductTab2/> }
            </section>
            <ContactBanner />
            <CallBtn />
            <Footer />
        </div>
    )
}

export default Product;