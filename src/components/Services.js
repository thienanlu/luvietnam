// import components
import Header from "./Header"
import Footer from "./Footer"
import Carousel from "./Carousel";
import ServiceCard from "./ServiceCard";
import ContactBanner from "./ContactBanner";

// import image
import serviceCard1 from "../assets/img/service-item-1.jpg";


function Services(){
    return(
        <div className="service">
            <Header />
            <Carousel title="DỊCH VỤ CỦA CHÚNG TÔI"/>
            <div className="service-wrapper app-item container">
                <h3 className="service-heading home-section-title">Các gói thiết kế & setup</h3>
                <div className="row">
                    <ServiceCard name="Mẫu 20 chỗ ngồi" image={serviceCard1} />
                    <ServiceCard name="Mẫu 40 chỗ ngồi" image={serviceCard1} />
                    <ServiceCard name="Mẫu Kiosk online" image={serviceCard1} />
                </div>
            </div>
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default Services