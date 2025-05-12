import Slider from "react-slick";

// import image
// import testImg from '../assets/img/test-img-carousel.webp'
import carouselImg1 from '../assets/img/carousel-img-1.webp'
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
        fade: true,
        cssEase: 'linear'
      };
    return(
        <div className="slider-wrapper mt-114">
                <Slider {...settings} className="slider-main">
                <div class="slider-item">
                    <div className='slider-text'>
                        <h5 className='slider-item-title'>BÚN BÒ HUẾ LU VIETNAM</h5>
                        <ButtonComponent link="/lien-he" text="Nhận tư vấn"/>
                    </div>
                    <img src={carouselImg1} class="slider-img slider-img-1" alt="" />
                </div>
                <div class="slider-item slider-item-unique">
                    <div className="slider-text-2 slider-text">
                        <h5 className='slider-item-title'>MÔ HÌNH QUÁN BÚN BÒ HUẾ</h5>
                        <ButtonComponent link="/lien-he" text="Nhận tư vấn"/>
                    </div>
                    <img src={carouselImg2} class="slider-img slider-img-2" alt="" />
                </div>
                <div class="slider-item">
                    <div className='slider-text'>
                        <h5 className='slider-item-title'>CƠM GÀ DA GIÒN LU VIETNAM</h5>
                        <ButtonComponent link="/lien-he" text="Nhận tư vấn"/>
                    </div>
                    <img src={carouselImg3} class="slider-img slider-img-3" alt="" />
                </div>
                <div class="slider-item slider-item-unique">
                    <div className='slider-text-4 slider-text'>
                        <h5 className='slider-item-title'>MÔ HÌNH QUÁN CƠM GÀ DA GIÒN</h5>
                        {/* <ButtonComponent link="/mo-hinh-quan-com-ga-da-gion" text="Chi tiết"/> */}
                        <ButtonComponent link="/lien-he" text="Nhận tư vấn"/>
                    </div>
                    <img src={carouselImg4} class="slider-img slider-img-4" alt="" />
                </div>
                </Slider>
    </div>
    )
}

export default Carousel