import Button from "./Button";

import '../assets/css/contactbanner.css'

function ContactBanner(){
    return(
        <section className="contact-banner app-item">
            <div className="contact-banner-container">
                <h3 className="home-section-title">Cần tư vấn thêm?</h3>
                <Button to="/contact" text="Liên hệ với chúng tôi" />
            </div>
        </section>
    )
}

export default ContactBanner;