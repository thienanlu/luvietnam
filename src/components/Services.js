import { useEffect } from "react";
import { Helmet } from "react-helmet";

// import components
import Header from "./Header"
import Footer from "./Footer"
import ContactBanner from "./ContactBanner";
import ButtonComponent  from "./Button";
import CallBtn from "./CallBtn";

// import image
import serviceCard1 from "../assets/img/carousel-img-4.webp";
import serviceCard2 from "../assets/img/bunbo/bunbo-1.webp";
import serviceCard3 from "../assets/img/kiosk/kiosk-2.webp";
import projectCard1 from '../assets/img/project/project1-img-3.webp'


function Services(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className="service">
            <Helmet>
                <title>Dịch vụ tư vấn & thiết kế quán ăn</title>
                <meta name="description" content="Các gói thiết kế - setup của chúng tôi tập trung vào hai mô hình Cơm gà da giòn và Bún bò huế" />
                <meta name="keywords" content="Setup quán ăn, Quy trình thiết kế quán ăn, Thiết kế nhà hàng, Cơm gà da giòn, Bún bò huế, quán ăn" />
                <meta property="og:title" content="Dịch vụ tư vấn & thiết kế nội thất quán ăn" />
                <meta property="og:image" content="thumbnail.jpg" />
                <meta property="og:description" content="Các gói thiết kế - setup của chúng tôi tập trung vào hai mô hình Cơm gà da giòn và Bún bò huế" />
            </Helmet>
            <Header active="4" />
            <div className="service-wrapper app-item container mt-114">
                <h3 className="service-heading app-item-title">Các gói thiết kế & setup</h3>
                <div className="row">
                    <div className="service-card col-lg-6 col-sm-12">
                        <div className="service-card-wrapper">
                            <img src={serviceCard1} alt="Sample restaurant setted up by Luvietnam" />
                            <div className="service-card-textbox">
                                <h3 className="service-card-name">Mô hình quán cơm gà da giòn</h3>
                                <div className="service-card-nav">
                                    <ButtonComponent link="/mo-hinh-quan-com-ga-da-gion" text="Chi tiết" />
                                    <ButtonComponent link="/contact" text="Nhận tư vấn" />

                                    {/* open button modal for project images */}
                                    {/* <Button variant="primary" onClick={() => setModalShow(true)} className='button service-modal-btn'>
                                        Xem hình ảnh
                                    </Button> */}
                                </div>
                                    {/* <ServiceModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        name={props.name}
                                        image1={props.image1}
                                        image2={props.image2}
                                        image3={props.image3}
                                        image4={props.image4}
                                        image5={props.image5}
                                    /> */}
                            </div>
                        </div>
                    </div>
                    <div className="service-card col-lg-6 col-sm-12">
                        <div className="service-card-wrapper">
                            <img src={serviceCard2} alt="Sample restaurant setted up by Luvietnam" />
                            <div className="service-card-textbox">
                                <h3 className="service-card-name">Mô hình quán bún bò huế</h3>
                                <div className="service-card-nav">
                                    <ButtonComponent link="/mo-hinh-quan-bun-bo-hue" text="Chi tiết" />
                                    <ButtonComponent link="/contact" text="Nhận tư vấn" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-card col-lg-6 col-sm-12">
                        <div className="service-card-wrapper">
                            <img src={serviceCard3} alt="Sample restaurant setted up by Luvietnam" />
                            <div className="service-card-textbox">
                                <h3 className="service-card-name">Mô hình kiosk</h3>
                                <div className="service-card-nav">
                                    <ButtonComponent link="/mo-hinh-kiosk" text="Chi tiết" />
                                    <ButtonComponent link="/contact" text="Nhận tư vấn" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <ServiceCard name="Mô hình Cơm Gà Da Giòn Mr.lữ" image={serviceCard1} image1={serviceCarouselImg6} image2={serviceCarouselImg7} image3={serviceCarouselImg8} image4={serviceCarouselImg9} image5={serviceCarouselImg10} id="1"/>
                    <ServiceCard name="Mô hình Bún Bò Huế Ngon số 1" image={serviceCard2} image1={serviceCarouselImg1} image2={serviceCarouselImg2} image3={serviceCarouselImg3} image4={serviceCarouselImg4} image5={serviceCarouselImg5} id="2"/> */}
                </div>
            </div>
            <div className="our-projects app-item">
                <h3 className="app-item-title">Một số dự án của chúng tôi</h3>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-12">
                            <div className="project-card">
                                <img src={projectCard1} alt="Sample restaurant setted up by Luvietnam" />
                                <div className="project-card-textbox">
                                    <h3 className="project-card-name">Bún Bò Huế Ngon số 1</h3>
                                    <ButtonComponent text="Xem thêm" link="/du-an-bun-bo-hue-ngon-so-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactBanner />
            <CallBtn />
            <Footer />
        </div>
    )
}

export default Services