// import image
import carouselImg1 from '../assets/img/carousel-img-1.jpg'
import carouselImg2 from '../assets/img/carousel-img-2.jpg'
import carouselImg3 from '../assets/img/carousel-img-3.jpg'

import '../assets/css/carousel.css'

function Carousel(props){
    return(
        <div className="carousel-wrapper">
            <div id="carouselExampleAutoplaying" class="carousel home-carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators ">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={carouselImg1} class="" alt="..." />
                    <div class="carousel-text">
                        <h5>{props.title}</h5>
                        <p>{props.text}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={carouselImg2} class="" alt="..." />
                    <div class="carousel-text">
                        <h5>{props.title}</h5>
                        <p>{props.text}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={carouselImg3} class="" alt="..." />
                    <div class="carousel-text">
                        <h5>{props.title}</h5>
                        <p>{props.text}</p>
                    </div>
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
        </div>
    </div>
    )
}

export default Carousel