import { Link } from "react-router";
import { useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import ContactBanner from "./ContactBanner";

import bannerImg from '../assets/img/kiosk/kiosk-3.webp'
import galleryImg1 from '../assets/img/kiosk/kiosk-1.webp'
import galleryImg2 from '../assets/img/kiosk/kiosk-2.webp'
import galleryImg3 from '../assets/img/kiosk/kiosk-3.webp'
import ButtonComponent from "./Button";

import '../assets/css/service.css'

function ServiceModel3(){
    useEffect(() => {
                        window.scrollTo(0, 0);
                      }, [])
    return (
        <div className="service-model">
            <Header active="4" />
            <div className="service-model-banner mt-114">
                <div className="service-text">
                    <h3 className="">Mô hình Kiosk </h3>
                </div>
                <img src={bannerImg} alt="banner" />
                {/* <i class="fa-solid fa-arrow-down"></i> */}
            </div>
            <div className="service-model-wrapper app-item" id="service-model-wrapper">
                <h5 className="service-model-subtitle">Giới thiệu</h5>
                <p className="service-model-desc">
                Dịch vụ thiết kế mô hình kiosk của chúng tôi chuyên tạo ra không gian quán độc đáo, thu hút, tối ưu công năng và mang lại trải nghiệm thoải mái cho thực khách. Với đội ngũ thiết kế sáng tạo, chúng tôi sẽ giúp bạn xây dựng một không gian gọn gàng, hiện đại, phù hợp với các vị trí có diện tích hạn chế và khoản đầu tư nhỏ. Chúng tôi cam kết mang đến giải pháp thiết kế hoàn hảo, giúp quán của bạn nổi bật và thu hút khách hàng.
                </p>
                <h5 className="service-model-subtitle">Thông tin tổng quan:</h5>
                <ul className="service-model-details">
                    <li className="">Diện tích mặt bằng: <b>10m2 - 15m2</b></li>
                    <li className="">Số lượng bàn: <b>2-3 bàn</b></li>
                    <li className="">Quy mô: <b>8-15 khách</b></li>
                    <li className="">Thời gian thi công dự kiến: <b>3-5 tháng</b></li>
                    <li className="">Chi phí dự kiến: <b> ~ 80 triệu</b></li>
                </ul>
                <div className="service-model-process">
                    <h5 className="service-model-subtitle">Quy trình thi công:</h5>
                    <div className="service-model-process-main">
                        <div className="service-model-item">

                        </div>
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
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default ServiceModel3;