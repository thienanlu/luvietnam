// import image
import carouselImg from '../assets/img/carousel.jpg'

function Carousel(){
    return(
        <div className="carousel-wrapper">
            <img src={carouselImg} alt="a model restaurant design by Lu VietNam" className='carousel-img'/>
            <div className="carousel-textbox">
                <h2>LU VIETNAM</h2>
                <h3>Tư vấn - Thiết kế - Thi công Set Up quán - Đào tạo bếp</h3>
            </div>
        </div>
    )
}

export default Carousel