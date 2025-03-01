import ButtonComponent from "./Button";

import backgroundImage from '../assets/img/carousel-img-2.jpg'

import '../assets/css/contactbanner.css'

function ContactBanner(){
    return(
        <section className="contact-banner app-item">
            <img src={backgroundImage} alt="sample restaurant" />
            <div className="contact-banner-text">
                <h3 className="home-section-title">Bạn cần tư vấn?</h3>
                <ButtonComponent link="/contact" text="Liên hệ với chúng tôi" />
            </div>
        </section>
    )
}

export default ContactBanner;