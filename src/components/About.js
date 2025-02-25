import { useEffect } from "react";

// import components
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import ContactBanner from "./ContactBanner";

import founderImg from '../assets/img/founder-img.jpg'

import '../assets/css/about.css'

function About(){
    useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
    return(
        <div className="about">
            <Header active="2"/>
            <Carousel text="ĐÔI NÉT VỀ LUVIETNAM" title="VỀ CHÚNG TÔI"/>
            <section className="home-about-section about-wrapper container-fluid app-item">
                <div className="row align-items-center justify-content-between">
                    <div className="about-details col-lg-8 col-sm-12">
                        <h2 className="home-section-title">Lu Vietnam</h2>
                        <article>
                            <p>Được sáng lập bởi ông <b>Lữ Thuận Lợi</b>, </p>
                            <p>Ông Lữ Thuận Lợi là người sáng lập của thương hiệu <b>Bún Bò Huế Ngon số 1&
                            Cơm Gà Da Giòn Mr. Lữ.</b></p>
                            <p>Ông có hơn 20 năm kinh nghiệm trong ngành và đã xây dựng được thương hiệu uy tín và được nhiều người biết đến. </p> 
                            <p>Ông là một người có tâm huyết với việc giúp đỡ các bạn trẻ khởi nghiệp và luôn sẵn sàng chia sẻ những kinh nghiệm của mình. </p>
                            <p>Với ước mơ phát triển & sáng tạo ông luôn học hỏi và không ngừng cải tiến nhằm mang lại nững giá trị cho khách hàng, đối tác & cộng đồng với tinh thần của 1 người con Việt Nam. </p>
                        </article>
                    </div>
                    <img src={founderImg} alt="Chân dung nhà sáng lập Luvietnam, ông Lữ Thuận Lợi" className="col-lg-4 col-sm-12 app-section-img" />
                </div>
            </section>

            {/* Project gallery update later */}
            {/* <section className="about-projects app-item">
                <h3 className="home-section-title about-projects-title">Một số dự án của Luvietnam</h3>
                <div className="about-project-gallery container">
                    <div className="row">

                    </div>
                </div>
            </section> */}
            <ContactBanner />
            <Footer />
            {/* <ScrollRestoration /> */}
        </div>
    )
}

export default About;