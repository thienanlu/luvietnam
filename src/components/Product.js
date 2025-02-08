// import components
import Header from "./Header";
import Footer from "./Footer";
import ContactBanner from "./ContactBanner";
import Carousel from "./Carousel";


function Product(){
    return(
        <div className="product">
            <Header />
            <Carousel title="Chúng tôi cung cấp những sản phẩm chất lượng tốt nhất" />
            
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default Product;