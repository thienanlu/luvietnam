import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import CallBtn from "./CallBtn";
import ContactBanner from "./ContactBanner";

import projectImg1 from '../assets/img/project/project1-img-1.webp'
import projectImg2 from '../assets/img/project/project1-img-2.webp'
import projectImg3 from '../assets/img/project/project1-img-3.webp'
import projectImg4 from '../assets/img/project/project1-img-4.webp'
import projectImg5 from '../assets/img/project/project1-img-5.webp'
import projectImg6 from '../assets/img/project/project1-img-6.webp'
import projectImg7 from '../assets/img/project/project1-img-7.webp'
import projectImg8 from '../assets/img/project/project1-img-8.webp'


function ProjectDetail1(){
    useEffect(() => {
                        window.scrollTo(0, 0);
                      }, []);

    const navigate = useNavigate();
    const returnPrevious = () => {
        navigate(-1)
    }
    return (
        <div className="project-detail">
            <Helmet>
                <title>Dự án Quán bún bò huế ngon số 1 - Long An</title>
                <meta name="description" content="Dự án quán bún bò huế ngon số 1 - dự án nổi bật được lên kế hoạch - thiết kế - thi công bởi Lu Vietnam" />
                <meta property="og:title" content="Dự án Quán bún bò huế ngon số 1 - Long An" />
                <meta property="og:image" content="thumbnail.jpg" />
                <meta property="og:description" content="Dự án quán bún bò huế ngon số 1 - dự án nổi bật được lên kế hoạch - thiết kế - thi công bởi Lu Vietnam" />
            </Helmet>
            <Header active="4" />
            <nav className="article-nav">
                <span onClick={returnPrevious}><i class="fa-solid fa-arrow-left"></i> Quay lại</span>
            </nav>
            <article className="project-detail-wrapper app-item">
                <h3 className="app-item-title">Dự án Bún Bò Huế Ngon Số 1 </h3>
                <h5 className="service-model-subtitle">Giới thiệu</h5>
                <p className="service-model-desc">
                Dự Án Quán Bún Bò Huế Ngon Số 1 được thực hiện bởi Lu Vietnam là một trong những bước đi chiến lược trong việc phát triển chuỗi ẩm thực đặc sản Việt Nam, với mục tiêu mang đến cho thực khách những trải nghiệm ẩm thực đậm đà hương vị miền Trung. Dự án này được khởi động với sứ mệnh đưa món bún bò Huế truyền thống trở thành món ăn yêu thích của mọi gia đình, đồng thời tôn vinh những giá trị văn hóa ẩm thực đặc sắc của vùng đất Huế.                
                </p>
                <h5 className="service-model-subtitle">Một số hình ảnh</h5>
                <div className="project-img row">
                    <img src={projectImg1} className="col-lg-6 col-sm-12" alt="Hình ảnh quán bún bò huế ngon số 1" />
                    <img src={projectImg2} className="col-lg-6 col-sm-12" alt="Hình ảnh quán bún bò huế ngon số 1" />
                    <img src={projectImg3} className="col-lg-6 col-sm-12" alt="Hình ảnh quán bún bò huế ngon số 1" />
                    <img src={projectImg4} className="col-lg-6 col-sm-12" alt="Hình ảnh quán bún bò huế ngon số 1" />
                    <img src={projectImg5} className="col-lg-6 col-sm-12" alt="Hình ảnh quán bún bò huế ngon số 1" />
                    <img src={projectImg6} className="col-lg-6 col-sm-12" alt="Hình ảnh quán bún bò huế ngon số 1" />
                    <img src={projectImg7} className="col-lg-6 col-sm-12" alt="Hình ảnh quán bún bò huế ngon số 1" />
                    <img src={projectImg8} className="col-lg-6 col-sm-12" alt="Hình ảnh quán bún bò huế ngon số 1" />
                </div>
            </article>
            <ContactBanner />
            <CallBtn />
            <Footer />
        </div>
    )
}

export default ProjectDetail1;