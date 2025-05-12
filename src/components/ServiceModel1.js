// import { Link } from "react-router";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import ContactBanner from "./ContactBanner";
import CallBtn from "./CallBtn";

import bannerImg from '../assets/img/carousel-img-4.webp'
import galleryImg1 from '../assets/img/comga/comga-1.webp'
import galleryImg2 from '../assets/img/comga/comga-2.jpg'
import galleryImg3 from '../assets/img/comga/comga-3.jpg'
import galleryImg4 from '../assets/img/comga/comga-4.jpg'
import galleryImg5 from '../assets/img/comga/comga-5.jpg'
import galleryImg6 from '../assets/img/comga/comga-6.jpg'
import processImg from '../assets/img/service-process.webp'

function ServiceModel1(){
    useEffect(() => {
                        window.scrollTo(0, 0);
                      }, [])
    return (
        <div className="service-model">
            <Helmet>
                <title>Mô hình quán cơm gà da giòn</title>
                <meta name="description" content="Chi tiết mô hình quán cơm gà da giòn - quy trình thi công - chi phí dự kiến" />
                <meta name="keywords" content="Quán cơm gà da giòn, mô hình quán ăn, mô hình quán cơm gà, quán cơm, kinh doanh, cơm gà" />
                <meta property="og:title" content="Mô hình quán cơm gà da giòn" />
                <meta property="og:image" content="thumbnail.jpg" />
                <meta property="og:description" content="Chi tiết mô hình quán cơm gà da giòn - quy trình thi công - chi phí dự kiến" />
            </Helmet>
            <Header active="4" />
            <div className="service-model-banner mt-114">
                <div className="service-text">
                    <h3 className="">Mô hình quán cơm gà da giòn</h3>
                </div>
                <img src={bannerImg} alt="banner" />
            </div>
            <div className="service-model-wrapper app-item" id="service-model-wrapper">
                <h5 className="service-model-subtitle">Giới thiệu</h5>
                <p className="service-model-desc">
                Dịch vụ thiết kế quán cơm gà của chúng tôi luôn hướng tới sự tối giản và gần gũi tạo cảm giác thân thiện, tối ưu công năng và mang lại trải nghiệm thoải mái cho thực khách. Với đội ngũ thiết kế sáng tạo, chúng tôi sẽ giúp bạn xây dựng một không gian ấm cúng, hiện đại, phù hợp với phong cách quán cơm gà và thương hiệu của bạn. Chúng tôi cam kết mang đến giải pháp thiết kế hoàn hảo, giúp quán của bạn nổi bật và thu hút khách hàng.                </p>
                <h5 className="service-model-subtitle">Thông tin tổng quan:</h5>
                <ul className="service-model-details">
                    <li className="">Diện tích mặt bằng: <b>20m2 - 150m2</b></li>
                    <li className="">Số lượng bàn: <b>5 bàn - 30 bàn</b></li>
                    <li className="">Quy mô: <b>20 - 150 khách</b></li>
                    <li className="">Thời gian thi công dự kiến: <b>2 tuần - 8 tuần</b></li>
                    <li className="">Chi phí dự kiến: <b> ~ Chỉ từ 90 triệu</b></li>
                </ul>
                <div className="service-model-process">
                    <h5 className="service-model-subtitle">Quy trình thi công:</h5>
                    <div className="service-model-process-main">
                        <img src={processImg} alt="Our service process" />
                    </div>
                </div>
                <div className="service-model-img">
                    <h5 className="service-model-subtitle">Hình ảnh mặt bằng và nội thất quán</h5>
                    <div className="service-model-gallery">
                        <img src={galleryImg1} alt="model 1" loading="lazy"/>
                        <img src={galleryImg2} alt="model 2" loading="lazy"/>
                        <img src={galleryImg3} alt="model 3" loading="lazy"/>
                        <img src={galleryImg4} alt="model 4" loading="lazy"/>
                        <img src={galleryImg5} alt="model 5" loading="lazy"/>
                        <img src={galleryImg6} alt="model 6" loading="lazy"/>
                    </div>
                </div>
            </div>
            <CallBtn />
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default ServiceModel1;