import { useEffect } from "react";

// import components
import Header from "./Header"
import Footer from "./Footer"
import ServiceCard from "./ServiceCard";
import ContactBanner from "./ContactBanner";
import CallBtn from "./CallBtn";

// import image
import serviceCard1 from "../assets/img/comga/comga-1.webp";
import serviceCard2 from "../assets/img/bunbo/bunbo-1.webp";
// image for bunbo card carousel
import serviceCarouselImg1 from '../assets/img/bunbo/bunbo-1.webp'
import serviceCarouselImg2 from '../assets/img/bunbo/bunbo-2.jpg'
import serviceCarouselImg3 from '../assets/img/bunbo/bunbo-3.jpg'
import serviceCarouselImg4 from '../assets/img/bunbo/bunbo-4.jpg'
import serviceCarouselImg5 from '../assets/img/bunbo/bunbo-5.jpg'
// image for comga card carousel
import serviceCarouselImg6 from '../assets/img/comga/comga-1.webp'
import serviceCarouselImg7 from '../assets/img/comga/comga-2.jpg'
import serviceCarouselImg8 from '../assets/img/comga/comga-3.jpg'
import serviceCarouselImg9 from '../assets/img/comga/comga-4.jpg'
import serviceCarouselImg10 from '../assets/img/comga/comga-5.jpg'


function Services(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className="service">
            <Header active="4" />
            <div className="service-wrapper app-item container mt-114">
                <h3 className="service-heading home-section-title">Các gói thiết kế & setup</h3>
                <div className="row">
                    <ServiceCard name="Mô hình Cơm Gà Da Giòn Mr.lữ" image={serviceCard1} image1={serviceCarouselImg6} image2={serviceCarouselImg7} image3={serviceCarouselImg8} image4={serviceCarouselImg9} image5={serviceCarouselImg10} id="1"/>
                    <ServiceCard name="Mô hình Bún Bò Huế Ngon số 1" image={serviceCard2} image1={serviceCarouselImg1} image2={serviceCarouselImg2} image3={serviceCarouselImg3} image4={serviceCarouselImg4} image5={serviceCarouselImg5} id="2"/>
                </div>
            </div>
            <ContactBanner />
            <CallBtn />
            <Footer />
        </div>
    )
}

export default Services