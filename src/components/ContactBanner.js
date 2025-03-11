import ButtonComponent from "./Button";

import backgroundImage from '../assets/img/carousel-img-3.webp'

import '../assets/css/contactbanner.css'

function ContactBanner(){
    return(
        <section className="contact-banner app-item">
            <img src={backgroundImage} alt="sample restaurant" loading="lazy"/>
            <div className="contact-banner-text">
                <h3 className="home-section-title">Đăng ký tư vấn miễn phí</h3>
                <ButtonComponent link="/contact" text="Liên hệ với chúng tôi" />
            </div>
        </section>
    )
}

export default ContactBanner;