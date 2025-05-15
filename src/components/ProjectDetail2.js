import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Header from "./Header";
import Footer from "./Footer";
import CallBtn from "./CallBtn";
import ContactBanner from "./ContactBanner";

import projectImg1 from '../assets/img/project/project2-img-1.webp'
import projectImg2 from '../assets/img/project/project2-img-2.webp'
import projectImg3 from '../assets/img/project/project2-img-3.webp'
import projectImg4 from '../assets/img/project/project2-img-4.webp'
import projectImg5 from '../assets/img/project/project2-img-5.webp'

function ProjectDetail2(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate();
    const returnPrevious = () => {
    navigate('/services')
}
    return (
        <div className="project-detail">
            <Helmet>
                <title>Dự án Quán bún bò huế Ngon by Lu Vietnam</title>
                <meta name="description" content="Dự án quán bún bò huế Ngon - dự án nổi bật được lên kế hoạch - thiết kế - thi công bởi Lu Vietnam" />
                <meta property="og:title" content="Dự án Quán bún bò huế Ngon by Lu Vietnam" />
                <meta property="og:image" content="thumbnail.jpg" />
                <meta property="og:description" content="Dự án quán bún bò huế Ngon - dự án nổi bật được lên kế hoạch - thiết kế - thi công bởi Lu Vietnam" />
            </Helmet>
            <Header active="4" />
            <nav className="article-nav">
                <span onClick={returnPrevious}><i class="fa-solid fa-arrow-left"></i> Quay lại</span>
            </nav>
            <article className="project-detail-wrapper app-item">
                <div className="project-logo">
                    <img src={projectImg1} alt="logo dự án"/>
                </div>
                <h3 className="app-item-title">Dự án "Bún Bò Huế Ngon By Lu Vietnam" </h3>
                <h5 className="service-model-subtitle">Giới thiệu</h5>
                <p className="service-model-desc">
                Dự Án Quán Bún Bò Huế Ngon được thực hiện bởi Lu Vietnam là một bước đột phá trong việc mang hương vị đặc trưng của ẩm thực truyền thống 
                đến gần hơn với cộng đồng. Với mục tiêu không chỉ tạo ra một điểm đến ẩm thực mà còn xây dựng một không gian giao thoa văn hóa, dự án hướng tới
                việc kết hợp tinh hoa món ăn truyền thống với phong cách phục vụ hiện đại. Không chỉ là nơi thưởng thức ẩm thực, quán còn trở thành địa điểm chia sẻ những câu chuyện và giá trị văn hoá Việt Nam. Đây là cơ hội để lan tỏa niềm tự hào về món bún bò Huế, cùng hành trình ghi dấu ấn trong ngành dịch vụ ẩm thực.           
                </p>
                <div className="project-info container-fluid">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 project-info-col">
                            <div className="contact-info-item project-info-text">
                                <i class="fa-solid fa-location-dot"></i>
                                <p><span>Địa chỉ:</span>204 Thạnh Xuân 21, P. Thạnh Xuân, Q.12, TP.HCM</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 project-info-col">
                            <div className="project-info-link">
                                <Link to="https://www.facebook.com/profile.php?id=61575108402523"><i className="fa-brands fa-facebook"></i></Link>
                                <Link to="https://www.tiktok.com/@bunbohuengonbyluvietnam?_t=ZS-8veLJz1nSMc&_r=1"><i className="fa-brands fa-tiktok"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="project-video">
                    <iframe width="350" height="560" loading="lazy"
                        src="https://youtube.com/embed/JtpWfj7hr-k?feature=shared"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                    </div>
                    <h5 className="service-model-subtitle">Một số hình ảnh</h5>
                    <div className="project-img row">
                        <img src={projectImg1} className="col-lg-6 col-sm-12" alt="Hình ảnh quán bún bò huế ngon số 1" />
                        <img src={projectImg2} className="col-lg-6 col-sm-12" alt="Hình ảnh quán bún bò huế ngon số 1" />
                        <img src={projectImg3} className="col-lg-6 col-sm-12" alt="Hình ảnh quán bún bò huế ngon số 1" />
                        <img src={projectImg4} className="col-lg-6 col-sm-12" alt="Hình ảnh quán bún bò huế ngon số 1" />
                        <img src={projectImg5} className="col-lg-6 col-sm-12" alt="Hình ảnh quán bún bò huế ngon số 1" />
                    </div>
                </div>
            </article>
            <ContactBanner />
            <CallBtn />
            <Footer />
        </div>
    )
}

export default ProjectDetail2