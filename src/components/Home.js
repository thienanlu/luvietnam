// import components
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";

import '../assets/css/home.css'

function Home(){
    return(
        <div className="home-wrapper">
            <Header />
            <Carousel />
            <div className="box"></div>
            <Footer />
        </div>
    )
}

export default Home;