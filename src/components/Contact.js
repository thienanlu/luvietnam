import { useEffect } from "react"

// import components
import Header from "./Header"
import Footer from "./Footer"
import ContactForm from "./ContactForm"
import CallBtn from "./CallBtn"

import '../assets/css/contact.css'
import { Helmet } from "react-helmet"

function Contact(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="contact">
            <Helmet>
                <title>Liên hệ - Tư vấn</title>
                <meta name="description" content="Liên hệ với chúng tôi để nhận tư vấn ngay" />
                <meta property="og:title" content="Liên hệ & Tư vấn" />
                <meta property="og:image" content="thumbnail.jpg" />
                <meta property="og:description" content="Liên hệ với chúng tôi để nhận tư vấn ngay" />
            </Helmet>
            <Header active="6"/>
            {/* <div className="box"></div> */}
            <section className="contact-wrapper container app-item">
                <h2 className="contact-title app-item-title">Liên hệ với chúng tôi</h2>
                <div className="contact-methods-wrapper row">
                    <div className="contact-info col-lg-6 col-sm-12">
                        <div className="contact-info-item">
                            <i class="fa-solid fa-location-dot"></i>
                            <p><span>Địa chỉ:</span>Picity High Park, Thạnh Xuân, Q.12, TP.HCM</p>
                        </div>
                        <div className="contact-info-item">
                            <i class="fa-solid fa-phone"></i>
                            <p><span>Hotline:</span> 0906 756 711</p>
                        </div>
                        <div className="contact-info-item">
                            <i class="fa-solid fa-clock"></i>
                            <p><span>Thời gian làm việc: </span>08:30 - 17:00</p>
                        </div>
                        <div className="contact-info-item">
                            <i class="fa-solid fa-envelope"></i>
                            <p><span>Email: </span>lufoodvietnam@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-form col-lg-6 col-sm-12">
                        <ContactForm />
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.298627442011!2d106.65991027136242!3d10.864876161672393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529e630b61163%3A0x9633c448d6c065fe!2sPicity%20High%20Park!5e0!3m2!1svi!2s!4v1740492873922!5m2!1svi!2s" className="contact-map" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="contact map"></iframe>
            </section>
            {/* <ContactForm /> */}
            <CallBtn />
            <Footer />
        </div>
    )
}

export default Contact