// import { Link } from "react-router";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import ContactBanner from "./ContactBanner";

import bannerImg from '../assets/img/kiosk/kiosk-3.webp'
import galleryImg1 from '../assets/img/kiosk/kiosk-1.webp'
import galleryImg2 from '../assets/img/kiosk/kiosk-2.webp'
import galleryImg3 from '../assets/img/kiosk/kiosk-3.webp'
import processImg from '../assets/img/service-process.webp'
import CallBtn from "./CallBtn";

import '../assets/css/service.css'

function ServiceModel3(){
    useEffect(() => {
                        window.scrollTo(0, 0);
                      }, [])
    return (
        <div className="service-model">
            <Helmet>
                <title>Mô hình Kiosk</title>
                <meta name="description" content="Chi tiết mô hình kiosk - quy trình thi công - chi phí dự kiến" />
                <meta property="og:title" content="Mô hình kiosk" />
                <meta property="og:image" content="thumbnail.jpg" />
                <meta property="og:description" content="Chi tiết mô hình kiosk - quy trình thi công - chi phí dự kiến" />
            </Helmet>
            <Header active="4" />
            <div className="service-model-banner mt-114">
                <div className="service-text">
                    <h3 className="">Mô hình Kiosk </h3>
                </div>
                <img src={bannerImg} alt="banner" />
            </div>
            <div className="service-model-wrapper app-item" id="service-model-wrapper">
                <h5 className="service-model-subtitle">Giới thiệu</h5>
                <p className="service-model-desc">
                Kiosk là mô hình kinh doanh tinh gọn, hiệu quả và có thể nhân bản số lượng lớn mà không bị áp lực đầu tư vào mặt bằng, không ngại chủ nhà lấy lại mặt bằng thuê, với chiếc kiosk di động thì giờ đây quý anh chị có thể di dời bất cứ đâu mình muốn miễn là nơi đó có nhu cầu.
                <p>Vị trí chiến lược cho các mô hình Kiosk take away: Trường học, khu trung tâm, tòa nhà văn phòng, trạm metro… </p>
                </p>
                <h5 className="service-model-subtitle">Thông tin tổng quan:</h5>
                <ul className="service-model-details">
                    <li className="">Diện tích mặt bằng: <b>10m2 - 15m2</b></li>
                    <li className="">Quy mô: <b>take away</b></li>
                    <li className="">Thời gian thi công dự kiến: <b>10 ngày</b></li>
                    <li className="">Chi phí dự kiến: <b> ~ Chỉ từ 50 triệu</b></li>
                </ul>
                <div className="service-model-process">
                    <h5 className="service-model-subtitle">Quy trình thi công:</h5>
                    <div className="service-model-process-main">
                        <img src={processImg} alt="Our service process" />
                    </div>
                </div>
                <div className="service-model-img">
                    <h5 className="service-model-subtitle">Hình ảnh mặt bằng và nội thất kiosk</h5>
                    <div className="service-model-gallery">
                        <img src={galleryImg1} alt="model 1" loading="lazy"/>
                        <img src={galleryImg2} alt="model 2" loading="lazy"/>
                        <img src={galleryImg3} alt="model 3" loading="lazy"/>                    </div>
                </div>
            </div>
            <CallBtn />
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default ServiceModel3;