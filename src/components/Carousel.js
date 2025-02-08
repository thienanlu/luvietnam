// import image
import carouselImg from '../assets/img/carousel.jpg'

function Carousel(props){
    return(
        <div className="carousel-wrapper">
            <img src={carouselImg} alt="a model restaurant design by Lu VietNam" className='carousel-img'/>
            <div className="carousel-textbox">
                <h2>LU VIETNAM</h2>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}

export default Carousel