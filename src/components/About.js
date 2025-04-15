import { useEffect } from "react";
import {Helmet} from 'react-helmet'

// import components
import Header from "./Header";
import Footer from "./Footer";
import ContactBanner from "./ContactBanner";
import CallBtn from "./CallBtn";

import founderImg from '../assets/img/founder-img.jpg'

import '../assets/css/about.css'

function About(){
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return(
        <div className="about">
            <Helmet>
            <meta charSet="utf-8" />
                <title>Lu Vietnam - Về chúng tôi</title>
                <meta name="description" content="Đôi nét về Lu Vietnam" />
                <meta property="og:title" content="Lu Vietnam - Về chúng tôi" />
                <meta property="og:image" content="thumbnail.jpg" />
                <meta property="og:description" content="Lu Vietnam là đơn vị chuyên cung cấp dịch vụ setup và thiết kế nội thất quán ăn chuyên nghiệp" />
            </Helmet>
            <Header active="2"/>
            <section className="about-wrapper container-fluid app-item mt-114">
                <div className="row align-items-center justify-content-between">
                    <div className="about-details col-lg-8 col-sm-12">
                        <h2 className="home-section-title">Lu Vietnam</h2>
                        <article>
                            <p>Được sáng lập bởi ông <b>Lữ Thuận Lợi</b>, </p>
                            <p>Ông Lữ Thuận Lợi là người sáng lập của thương hiệu <b>Bún Bò Huế Ngon số 1 &
                            Cơm Gà Da Giòn Mr. Lữ.</b></p>
                            <p>Ông có hơn 20 năm kinh nghiệm trong ngành, xây dựng được thương hiệu uy tín và được nhiều người biết đến. </p> 
                            <p>Ông là một người có tâm huyết với việc giúp đỡ các bạn trẻ khởi nghiệp và luôn sẵn sàng chia sẻ những kinh nghiệm của mình. </p>
                            <p>Với ước mơ phát triển & sáng tạo, ông luôn học hỏi và không ngừng cải tiến nhằm mang lại những giá trị cho khách hàng, đối tác & cộng đồng với tinh thần của 1 người con Việt Nam. </p>
                        </article>
                    </div>
                    <img src={founderImg} alt="Chân dung nhà sáng lập Luvietnam, ông Lữ Thuận Lợi" className="col-lg-4 col-sm-12 founder-img app-section-img" />
                </div>
            </section>
            <ContactBanner />
            <CallBtn />
            <Footer />
        </div>
    )
}

export default About;