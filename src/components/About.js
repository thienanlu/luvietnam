// import components
import Header from "./Header";
import Footer from "./Footer";
import ContactBanner from "./ContactBanner";


function About(){
    return(
        <div className="about">
            <Header />
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default About;