// import components
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import ContactBanner from "./ContactBanner";


function About(){
    return(
        <div className="about">
            <Header />
            <Carousel title="ĐÔI NÉT VỀ LUVIETNAM" />
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default About;