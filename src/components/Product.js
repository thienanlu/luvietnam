// import components
import Header from "./Header";
import Footer from "./Footer";
import ContactBanner from "./ContactBanner";


function Product(){
    return(
        <div className="product">
            <Header />
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default Product;