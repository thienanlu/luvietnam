// import components
import Header from "./Header"
import Footer from "./Footer"
import ContactForm from "./ContactForm"

import '../assets/css/contact.css'

function Contact(){
    return (
        <div className="contact">
            <Header />
            {/* <div className="box"></div> */}
            <section className="contact-wrapper container app-item">
                <h2 className="contact-title app-item-title">Liên hệ với chúng tôi</h2>
                <div className="contact-methods-wrapper row">
                    <div className="contact-info col-lg-6 col-sm-12">
                        <div className="contact-info-item">
                            <i class="fa-solid fa-location-dot"></i>
                            <p><span>Địa chỉ:</span> Chung cư Picity High Park, Thạnh Xuân, Q.12, TP.HCM</p>
                        </div>
                        <div className="contact-info-item">
                            <i class="fa-solid fa-phone"></i>
                            <p><span>Hotline:</span> 0906 756 711</p>
                        </div>
                        <div className="contact-info-item">
                            <i class="fa-solid fa-clock"></i>
                            <p><span>Thời gian làm việc: </span>08:30 - 17:00</p>
                        </div>
                    </div>
                    <div className="contact-form col-lg-6 col-sm-12">
                        <ContactForm />
                    </div>
                </div>
            </section>
            {/* <ContactForm /> */}
            <Footer />
        </div>
    )
}

export default Contact