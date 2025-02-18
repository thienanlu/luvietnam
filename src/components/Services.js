// import components
import Header from "./Header"
import Footer from "./Footer"
import Carousel from "./Carousel";
import ServiceCard from "./ServiceCard";
import ContactBanner from "./ContactBanner";

// import image
import serviceCard1 from "../assets/img/comga/comga-1.jpg";
import serviceCard2 from "../assets/img/bunbo/bunbo-1.jpg";


function Services(){
    return(
        <div className="service">
            <Header />
            <Carousel title="DỊCH VỤ" text="DỊCH VỤ CỦA CHÚNG TÔI"/>
            <div className="service-wrapper app-item container">
                <h3 className="service-heading home-section-title">Các gói thiết kế & setup</h3>
                <div className="row">
                    <ServiceCard name="Mô hình Cơm Gà Da Giòn Mr.lữ" image={serviceCard1} />
                    <ServiceCard name="Mô hình Bún Bò Huế Ngon số 1" image={serviceCard2} />
                </div>
            </div>
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default Services