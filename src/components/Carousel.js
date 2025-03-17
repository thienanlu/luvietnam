import Slider from "react-slick";

// import image
import carouselMobileImg1 from '../assets/img/carousel-mobile-1.webp'
import carouselImg1 from '../assets/img/carousel-img-1.webp'
import carouselMobileImg2 from '../assets/img/carousel-mobile-2.webp'
import carouselImg2 from '../assets/img/carousel-img-2.webp'
import carouselImg3 from '../assets/img/carousel-img-3.webp'
import carouselImg4 from '../assets/img/carousel-img-4.webp'

import '../assets/css/carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ButtonComponent from './Button'

function Carousel(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <div className="slider-wrapper mt-114">
                <Slider {...settings} className="slider-main">
                <div class="slider-item">
                    <div className="slider-text">
                            <h5 className='slider-item-title'>MÔ HÌNH QUÁN BÚN BÒ HUẾ</h5>
                            <ButtonComponent link="/about" text="Về chúng tôi"/>
                            <ButtonComponent link="/services" text="Tìm hiểu thêm"/>
                    </div>
                    <img src={carouselImg1} class="slider-img" alt="First item" />
                </div>
                <div class="slider-item">
                    <div className='slider-text'>
                        <h5 className='slider-item-title'>MÔ HÌNH QUÁN CƠM GÀ DA GIÒN</h5>
                        <ButtonComponent link="/about" text="Về chúng tôi"/>
                        <ButtonComponent link="/services" text="Tìm hiểu thêm"/>
                    </div>
                    <img src={carouselImg2} class="slider-img" alt="First item" />
                </div>
                <div class="slider-item">
                    <div className='slider-text'>
                        <h5 className='slider-item-title'>CƠM GÀ DA GIÒN MR.LỮ</h5>
                        <ButtonComponent link="/about" text="Về chúng tôi"/>
                        <ButtonComponent link="/services" text="Tìm hiểu thêm"/>
                    </div>
                    <img src={carouselImg3} class="slider-img" alt="First item" />
                </div>
                <div class="slider-item">
                    <div className='slider-text'>
                        <h5 className='slider-item-title'>BÚN BÒ HUẾ NGON SỐ 1</h5>
                        <ButtonComponent link="/about" text="Về chúng tôi"/>
                        <ButtonComponent link="/services" text="Tìm hiểu thêm"/>
                    </div>
                    <img src={carouselImg4} class="slider-img" alt="First item" />
                </div>
                </Slider>

            {/* <div id="carouselExampleAutoplaying" class="carousel mt-114 slide" data-bs-ride="carousel">
                <div class="carousel-indicators ">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className='carousel-text'>
                        <h5 className='carousel-item-title'>MÔ HÌNH QUÁN BÚN BÒ HUẾ</h5>
                        <ButtonComponent link="/about" text="Về chúng tôi"/>
                        <ButtonComponent link="/service" text="Tìm hiểu thêm"/>
                    </div>
                    <img src={carouselImg1} class="" alt="First item" />
                </div>
                <div class="carousel-item">
                    <div className='carousel-text'>
                        <h5 className='carousel-item-title'>MÔ HÌNH QUÁN CƠM GÀ DA GIÒN</h5>
                        <ButtonComponent link="/about" text="Về chúng tôi"/>
                        <ButtonComponent link="/service" text="Tìm hiểu thêm"/>
                    </div>
                    <img src={carouselImg2} class="" alt="First item" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> */}
    </div>
    )
}

export default Carousel